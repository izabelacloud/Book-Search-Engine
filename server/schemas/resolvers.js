const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
// const { param } = require('../routes');

const resolvers = {

    Query: {

        // books: async (parent, {username}) => {
        //     const params = username ? {username} : {};
        //     return Book.find(params).sort({ createdAt: -1 });
        // },

        // books: async (parent, args) => {
        //     return Book.find();
        // },

        // book: async (parent, { _id}) => {
        //     return Book.findOne({_id});
        // },

        //get all users
        // users: async () => {
        //     return User.find()
        //         .select('-__v -password')
        //         .populate('books')
        // },

        //get a user by username
        me: async (parent, args, context) => {

            if(context.user) {
                const userData = await User.findOne({})
                .select('-__v -password')
                .populate('books')
            
                return userData;
            }

            throw new AuthenticationError('Not logged in')

        },

        // me: async (parent, { username }) => {
        //     return User.findOne({ username })
        //     .select('-__v -password')

        // }


    },

    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return {token, user};
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return {token, user};
    
        },

        saveBook: async (parent, args, context) => {
            if (context.user) {
            //   const savedBook = await Book.create({ ...args, username: context.user.username });
          
             const updatedUser =  await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: args.input } },
                { new: true }
              );
          
            //   return res.json;
            return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
        },

        // async saveBook({ user, body }, res) {
        //     console.log(user);
        //     try {
        //       const updatedUser = await User.findOneAndUpdate(
        //         { _id: user._id },
        //         { $addToSet: { savedBooks: body } },
        //         { new: true, runValidators: true }
        //       );
        //       return res.json(updatedUser);
        //     } catch (err) {
        //       console.log(err);
        //       return res.status(400).json(err);
        //     }
        //   },

        // saveBook: async (parent, { user }, context) => {
        //     if (context.user) {
        //       const updatedUser = await User.findOneAndUpdate(
        //         { _id: user._id },
        //         { $addToSet: { savedBooks: { bookSchema } } },
        //         { new: true, runValidators: true }
        //       );
          
        //       return updatedUser;
        //     }
          
        //     throw new AuthenticationError('You need to be logged in!');
        //   },


        removeBook: async (parent, {user}, context) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
            );
            return updatedUser;
        }

    }

};

module.exports = resolvers;
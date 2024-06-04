const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: { 
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type:String,
      required: true,
      unique:true,
      match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
      type:Schema.Types.ObjectId,
      ref: "Thought",
    }],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount')
  .get(function () {
    return `${this.friends.length}`;
  });

// Middleware to update friend count when a friend is added or removed
userSchema.post(['findOneAndUpdate', 'findOneAndRemove'], async function(doc) {
  if (doc.friends) {
    doc.friendCount = doc.friends.length;
    await doc.save();
  }
});

const User = model('User', userSchema);

module.exports = User;

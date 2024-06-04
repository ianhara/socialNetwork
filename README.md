# socialNetwork


## Overview

social network is a backend application where you can create users and sotre them in a mongoDB and using different endpoints, through insomnia you can add remove and update friends, thoughts, and reactions.

## Getting Started

Getting up and running is a simple process:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Launch the server with `npm start`.

## Usage Guide

Once your server is live, you're ready to dive in and start building connections. Create user accounts, share thoughts, and engage with others in your network.

## Available Endpoints

### Users

- **GET /api/users**: Retrieve all users.
- **GET /api/users/:userId**: Fetch a specific user by ID.
- **POST /api/users**: Add a new user.
- **PUT /api/users/:userId**: Update an existing user.
- **DELETE /api/users/:userId**: Remove a user from the network.

### Thoughts

- **GET /api/thoughts**: Get all posted thoughts.
- **GET /api/thoughts/:thoughtId**: Fetch a particular thought by ID.
- **POST /api/thoughts**: Share your own thoughts.
- **PUT /api/thoughts/:thoughtId**: Edit a thought you've shared.
- **DELETE /api/thoughts/:thoughtId**: Delete a thought from the network.

### Reactions

- **POST /api/thoughts/:thoughtId/reactions**: React to a thought.
- **DELETE /api/thoughts/:thoughtId/rea

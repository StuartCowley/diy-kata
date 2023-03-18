# DIY Kata

This is my first README. This is very basic, as I'm only explaining how I have tackled these katas.

Incidentally, the word 'kata' in the language of my country of origin Malaysia, means 'word', which I think is very apt for these little exercises!

I took my time with these katas, as I wanted to test as many scenarios as I possible could to ensure that my codes are able to handle them. I tried what is called 'edge cases', and in the reachDestination kata, discovered that, whilst Math.round should be used, an 'edge case' showed that Math.ceil was the better option.

I have tried to incorporate all the feedback I received for my basic js katas, I hope I have remembered everything.

I think I could have done a better job with the joinNames kata, but it did it in the way I understood. I will revisit when I have time.

## Instructions

Fork this repository and clone down your fork.

Change into the cloned folder, and add you and your partner's remotes to you your local.

Run `npm install` to install the necessary libraries required for Node.js to run.

There are two folders: `/src` and `/__tests__`. Both contain JS files named numerically. Start on the first file in `/src` and find the matching file in `/test`. On the curriculum materials on GitLab, you will find requirements that correspond to each one, explaining what the expected behaviour of each function should be, and what you should be asserting against in your tests. There is also a walkthrough for the first one, just to give you a bit of practice.

Once you've completed each function/test pair, run `npm test -- yourFunctionName` inside your cloned repo to check if your tests have worked.

Add, commit, push and swap pairing roles after each one. When you've done them all, both partners should create pull requests to this repository.

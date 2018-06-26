# Broken login form

Right now, users can get through with any password. Try it out.

## Challenge

Use git and create a commit for each feature. Submit a PR when you're done.

1. Only let users through if they enter the password 'doggo'.
   (Hint: you'll need body-parser to get the form info)
2. Return a 401 if any other password is entered.

## Beast mode:

1. Only let users through if they also check "I agree".
2. Add an email field to the login form. Update your password check.
3. Store a list of users, along with their passwords in an array of objects.
   Update your password check to use this array for authentication.
4. Keep count of login failures. Display these on the 401 page.
   E.g. "You've tried to login 3 times". Make sure it works per user.
5. Reset the login failures to 0 if they successfully log in.

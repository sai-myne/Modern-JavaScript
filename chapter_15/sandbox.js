const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the uer logged out');
    }
}

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'chun li',
    email: 'chunli@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the uer logged out');
    }
}

console.log(userTwo.email, userTwo.username);
userTwo.login();


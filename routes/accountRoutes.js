AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'login',
    layoutTemplate: 'loginLayout',
    redirect: '/'
});

AccountsTemplates.configureRoute('ensureSignedIn', {
    template: 'login',
    layoutTemplate: 'loginLayout'
});

Router.plugin('ensureSignedIn', {
    except: ['login', 'atSignIn', 'atSignUp', 'atForgotPassword']
});
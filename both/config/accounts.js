AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home'
});

T9n.map('en', {
    FullNameLabel: "Full Name",
    BirthdayLabel: "Birthday",
    AddressLabel: "Address",
    PhoneNumberLabel: "Phone Number"
});

T9n.map('fr', {
    FullNameLabel: "Nom Complet",
    BirthdayLabel: "Date de naissance",
    AddressLabel: "Addresse",
    PhoneNumberLabel: "Numéro de téléphone"
});

AccountsTemplates.addFields([
    {
        _id: 'fullName',
        type: 'text',
        required: true,
        displayName: 'FullNameLabel',
        placeholder: 'FullNameLabel'
    },
    {
        _id: 'birthday',
        type: 'text',
        required: true,
        displayName: 'BirthdayLabel',
        placeholder: 'BirthdayLabel',
        template: "dateInput"
    },
    {
        _id: 'address',
        type: 'text',
        required: true,
        displayName: 'AddressLabel',
        placeholder: 'AddressLabel'
    }
    ,
    {
        _id: 'phoneNumber',
        type: 'tel',
        required: true,
        displayName: 'PhoneNumberLabel',
        placeholder: 'PhoneNumberLabel'
    }
]);
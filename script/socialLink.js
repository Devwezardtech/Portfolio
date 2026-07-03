function openGmail() {
    const subject = encodeURIComponent("Hiring Inquiry - Portfolio");

    const body = encodeURIComponent(
`Hi Ejemar,

I visited your portfolio and I'm interested in discussing a potential opportunity with you.

Company:
Position/Project:
Message:

Best regards,`
    );

    const gmailLink =
        `https://mail.google.com/mail/u/0/?fs=1&to=ejemarmaloloyon007@gmail.com&su=${subject}&body=${body}&tf=cm`;

    window.open(gmailLink, "_blank");
}

function openLinkedIn() {
   var linkedinUsername = 'ejemar-maloloy-on-b14158225';
   var linkedinLink = 'https://www.linkedin.com/in/' + linkedinUsername;
      window.open(linkedinLink);
}
function openGitHub() {
   window.open('https://github.com/devwezardtech', '_blank');
}
function openMessenger() {
   var facebookUsername = 'maloloy-on.ejemar';
   var messengerLink = 'https://www.facebook.com/messages/t/' + facebookUsername;
      window.open(messengerLink);
}

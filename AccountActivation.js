document.accountActivationConfig = {
    messages: {
        mismatch: 'Passwords do not match!'
    }
}

function clsAccountActivation() {
    var self = this;

    var serviceUrl = window.vmsApiUrl;
    self.userName = ko.observable();
    self.oldPassword = ko.observable();
    self.newPassword = ko.observable('');
    self.newConfirmPassword = ko.observable('');
    self.showChangePassword = ko.observable(false);
    self.statusText = ko.observable('');
    self.displayStaticNotification = ko.observable(false);
    self.isSuccess = ko.observable(true);
    self.alertText = ko.observable('');

    self.acceptInvitation = function (userName) {
        $.ajax({
            url: serviceUrl + '/api/Invitation/Accept?invitationId=' + invitationId,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            },
            success: function (response) {
                self.displayStaticNotification(true);
                self.isSuccess(true);
                self.alertText(response);

                //setTimeout(function () { window.location.href = document.appConfig.externalSites.onboarding + '/UserOnboarding/DmzLogin/' + userName; }, 2000);
            },
            error: function (response) {
                self.displayStaticNotification(true);
                self.isSuccess(true);
                self.alertText(response);

                //setTimeout(function () { window.location.href = document.appConfig.externalSites.onboarding + '/UserOnboarding/DmzLogin/' + userName; }, 2000);
            }
        });
    }

    self.setInvitationStatus = function () {
        $.ajax({
            url: serviceUrl + '/api/Invitation?invitationId=' + invitationId,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Accept', 'application/json');
            },
            success: function (response) {
                if (response != null) {
                    self.userName(response.InviteeUserName);

                    // self regitered users or DMZ users or existing users
                    if (response.InviteeUserId == null || response.DomainName.toLowerCase() == 'dmz' || !response.IsNewUser) // for self-registered users
                        self.acceptInvitation(self.userName());
                    else {
                        if (!response.Active) {
                            self.displayStaticNotification(true);
                            self.isSuccess(false);
                            self.alertText('The invitation is no longer valid!');
                            //vmsWebUtils.displayToaster('The invitation is no longer valid!', document.appConfig.messageCodes.warning);
                        }
                        else {
                            self.showChangePassword(response.Active);
                            self.oldPassword(response.InviteePassword);
                        }
                    }
                } else {
                    self.displayStaticNotification(true);
                    self.isSuccess(false);
                    self.alertText('The invitation is no longer valid!');
                }
            },
            error: function (textStatus, errorThrown) {
                console.log("The following error occurred: " + errorThrown);
                console.log(textStatus);
            }
        });
    }

    self.updatePassword = function () {
        if (self.isValidatedPassword()) {
            $.ajax({
                url: serviceUrl + '/api/Provision/Change/Password?password=' + self.newPassword(),
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    "Password": self.oldPassword(),
                    "UserName": self.userName()
                }),
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                },
                success: function (response) {
                    if (response != null) {
                        self.showChangePassword(false);
                        self.acceptInvitation(self.userName());
                    }
                },
                error: function (textStatus, errorThrown) {
                    if (textStatus.status == 400)
                        vmsWebUtils.displayToaster(textStatus.responseText, document.appConfig.messageCodes.error);

                    console.log("The following error occurred: " + errorThrown);
                    console.log(textStatus);
                }
            });
        }
    }

    self.isValidatedPassword = function () {
        var isValid = true;
        var isMismatch = false;
        var password = $.trim(self.newPassword());
        var confirmPassword = $.trim(self.newConfirmPassword());

        if (!password) {
            isValid = false;
            $('[data-bind*="newPassword"]').parent().addClass('has-error');
        }
        if (!confirmPassword) {
            isValid = false;
            $('[data-bind*="newConfirmPassword"]').parent().addClass('has-error');
        }
        if (password.length > 0 && confirmPassword.length > 0) {
            if (password != confirmPassword) {
                isValid = false;
                isMismatch = true;
                $('[data-bind*="newPassword"]').parent().addClass('has-error');
                $('[data-bind*="newConfirmPassword"]').parent().addClass('has-error');
            }
        }

        if (!isValid)
            vmsWebUtils.displayToaster(isMismatch ? document.accountActivationConfig.messages.mismatch :
                document.appConfig.messages.required, document.appConfig.messageCodes.error);

        return isValid;
    }

    self.setInvitationStatus();
}

$(function () {
    ko.applyBindings(new clsAccountActivation());
})

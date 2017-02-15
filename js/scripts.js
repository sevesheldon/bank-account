//business logic

var accounts = [];

function BankAccount(name, deposit) {
  this.customerName = name;
  this.balance = deposit;
}

BankAccount.prototype.deposit = function(something) {
  this.balance += something;
}

BankAccount.prototype.withdraw = function(something) {
  if (something > this.balance){
    alert("You cannot overdraw your account!");
  } else {
    this.balance -= something;
  }
}

var displayAccount = function(account) {
  $("#account-display").show();
  var index = accounts.indexOf(account);
  $("form#edit-bank-account").attr("data-acct", index);
  $("#account-display h2").text(account.customerName);
  $("#show-balance").text(" $" + account.balance.toFixed(2));
}

//resets all "input" fields
var resetFields = function() {
  $("input").val("");
}

//user-interface
$(document).ready(function() {
  $("form#new-bank-account").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedDeposit = parseFloat($("input#new-deposit").val());
    var newBankAccount = new BankAccount(inputtedName, inputtedDeposit);

    accounts.push(newBankAccount);
    displayAccount(newBankAccount);

    $("ul#show-accounts").append('<li><span class="account">' + newBankAccount.customerName + '</span></li>')

    $(".account").last().click(function() {
      displayAccount(newBankAccount);
    });

    $("#accounts").show();
    resetFields("form#new-bank-account");
  });

  $("form#edit-bank-account").submit(function(event) {
      event.preventDefault();

      var userDeposit = parseFloat($("#deposit").val());
      var userWithdrawal = parseFloat($("#withdrawal").val());

      index = $("form#edit-bank-account").attr("data-acct");
      currentBankAccount = accounts[index];

      if (userDeposit) {
        currentBankAccount.deposit(userDeposit);
      }
      if (userWithdrawal) {
        currentBankAccount.withdraw(userWithdrawal);
      }

      displayAccount(currentBankAccount);
      resetFields("form#edit-bank-account");
  });

});

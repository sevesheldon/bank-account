
//business logic

function BankAccount(name, deposit) {
  this.customerName = name;
  this.balance = deposit;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}



//user-interface
$(document).ready(function() {
  $("form#new-bank-account").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedDeposit = parseFloat($("input#new-deposit").val());
    var newBankAccount = new BankAccount(inputtedName, inputtedDeposit);


    console.log(inputtedName);
    console.log(inputtedDeposit);
    console.log(typeof(inputtedDeposit));
    console.log(newBankAccount);

  });

});

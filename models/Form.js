// module/Form.js
const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    firstName: String,
    middleName:String,
    lastName:String,
    mobileNo: String,
    emailId:String,
    OTP:String,
    dateOfBirth:Date,
    panNumber:String,
    companyName:String,
    companyType:String,
    joining:String,
    Experience:String,
    currentEMI:String,
    salaryPaid:String,
    salaryInHand:String,
    CIBIL:String,
    loanAmount:String,
    City:String,
    pinCode:String,
    state:String,
});

module.exports = mongoose.model('Form', FormSchema);

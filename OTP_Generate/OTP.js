function otpGeneration(){
    let otp = ""
     for (let i=0; i<4; i++){
     otp += Math.floor(Math.random()*10);
     
     }
     console.log("GENERATED OTP: ", otp);
}

otpGeneration()

// ^^^ Interview question most time interviewer ask this type of question
//litlte bit Advance one (Alphanumeric OTP)
function generateOTP(length = 6) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let otp = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    otp += chars[index];
  }

  return otp;
}

const otp = generateOTP(6);
console.log("Generated OTP:", otp);

// We can also do like that in simple way [IF YOU KNOW THEN YOU KNOW THAT]
console.log(Math.floor(Math.random()*10000));
/*It can generate:
- 23
- 456
- 9
 # Not always 4-digit OTP
 # Leading zeros missing*/
//But here zero is missing [i mean no otp starting with zero generated]
console.log(Math.floor(1000 + Math.random() * 9000));

/*Why this works
## Math.random() * 9000 → 0 to 8999
+ 1000 → shifts range to 1000–9999

-- Always 4-digit number
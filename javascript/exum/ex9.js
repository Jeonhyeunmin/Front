/*
  ( ) : 그룹
  ?=.*[] : 앞쪽 모두(,)일치를, []안의 내용이 1개 이상 반복(*) 한다.
*/


function fCheck(){
  let regMid = /^[a-zA-Z0-9_]{4,20}$/;
  let regPwd = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+]).{4,20}/;
  let regEmail = /^[0-9a-zA-Z]([\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  let regNickName = /^[가-힣]$/;
  let regName = /[a-zA-Z가-힣]$/;
  let regHomePage = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  let regTel = /^01([0|1|6|7|8|9])[-]([0-9]{3,4})[-]([0-9]{4})$/
  let regJumin = /^[0-9]{6,6}[-][1-4]{1,1}$/;

  let mid = document.getElementById("mid").value.trim();
  let pwd = document.getElementById("pwd").value.trim();
  let nickName = document.getElementById("email").value.trim();
  let email = document.getElementById("email").value.trim();
  let name = document.getElementById("name").value.trim();
  let homePage = document.getElementById("homePage").value.trim();
  let tel = document.getElementById("tel").value.trim();
  let jumin = document.getElementById("jumin").value.trim();

  if(!regMid.test(mid)) {
    alert("아이디는 영문 대/소문자와 숫자, 그리고 밑줄(_)을 포함하여 4~20자까지 가능합니다.");
    document.getElementById("mid").focus();
    return false;
  }
  else if(!regPwd.test(pwd)) {
    alert("비밀번호는 문자/숫자/특수문자가 각각 1개 이상의 조합으로 4~20자까지 가능합니다.");
    document.getElementById("pwd").focus();
    return false;
  }
  else if(!regName.test(name)){
      alert("성명은 한글과 영어만 사용 가능합니다.");
      document.getElementById("name").focus;
      return false;
    }
    else if(!regEmail.test(email)) {
      alert("이메일주소는 이메일 형식에 맞도록 작성해 주세요.");
      document.getElementById("email").focus();
      return false;
    }
  else if(!regHomePage.test(homePage)){
    alert("홈페이지는 url 형식에 맞춰서 작성해주세요.")
    document.getElementById("homePage").focus;
    return false;
  }
  else if(!regTel.test(tel)){
    alert("전화번호는 지역번호(3)-국번호(3~4)-전화번호(4) 형식을 맞춰주세요. 예) 010-1234-5678")
    document.getElementById("tel").focus;
    return false;
  }
  else if(!regJumin.test(jumin)){
    alert("주민번호는 숫자와 구분자(-)만으로 구성되며, 앞쪽은 6자리 - 뒤쪽은 1자리(단 1~4까지만 입력허용.) 형식에 맞춰주세요.")
    document.getElementById("jumin").focus;
    return false;
  }
  alert("회원가입에 성공하였습니다.")
}
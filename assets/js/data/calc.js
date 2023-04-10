var str;
var trans;

$.ajax({
    url : "/assets/js/data/ko.json",
    type : "get",
    dataType : "json",

    success : function(data) {
        ko = JSON.stringify(data); // <> parse()
        trans = JSON.parse(ko); // <> parse()
        
    },
    error : function() { alert('error1'); } // data 불러오기 실패시 error 출력
});

$.ajax({
    url : "/assets/js/data/herodata.json",
    type : "get",
    dataType : "json",

    success : function(data) {

        var select = $('#heroList'); // select 요소 가져오기

    //  alert(str); 
        

    // 데이터의 각 항목을 반복하여 선택 옵션에 옵션 태그를 추가합니다.
    $.each(data, function(key, value) {
        if(trans[value.name]){
            value.name = trans[value.name];
        }

        var option = document.createElement('option'); // option 요소 생성
        option.setAttribute('value', key); // value 값 설정
        option.textContent = value.name;
        select.append(option); // option 요소 추가
    });

    str = JSON.stringify(data); // <> parse()
},
error : function() { alert('데이터 불러오기 '); } // data 불러오기 실패시 error 출력
});

function showHeroData() {
    // JSON 문자열을 JavaScript 객체로 변환하기
    var obj = JSON.parse(str);

    // alert('이건 함수안');

    // select 태그의 option 값과 같은 키 값의 데이터 가져오기
    var heroList = document.getElementById("heroList");
    var selectedOptionValue = heroList.value;
    var matchingData = obj[selectedOptionValue];

    // 결과를 HTML 태그에 출력하기
    var heroTable = document.createElement("table");
    
    // name과 calculatedStatus에서 lv60SixStarFullyAwakened을 출력할 테이블 바디 생성하기
    var tableBody = heroTable.createTBody();
    var bodyRow = tableBody.insertRow();
    var headerCell1 = bodyRow.insertCell();
    var bodyCell1 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell2 = bodyRow.insertCell();
    var bodyCell2 = bodyRow.insertCell();
    
    var bodyRow = tableBody.insertRow();
    var headerCell3 = bodyRow.insertCell();
    var bodyCell3 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell4 = bodyRow.insertCell();
    var bodyCell4 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell5 = bodyRow.insertCell();
    var bodyCell5 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell6 = bodyRow.insertCell();
    var bodyCell6 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell7 = bodyRow.insertCell();
    var bodyCell7 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell8 = bodyRow.insertCell();
    var bodyCell8 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell9 = bodyRow.insertCell();
    var bodyCell9 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell10 = bodyRow.insertCell();
    var bodyCell10 = bodyRow.insertCell();

    var bodyRow = tableBody.insertRow();
    var headerCell11 = bodyRow.insertCell();
    var bodyCell11 = bodyRow.insertCell();

    headerCell1.innerHTML = "<b>이름</b>";
    headerCell2.innerHTML = "<b>CP</b>";
    headerCell3.innerHTML = "<b>공격력</b>";
    headerCell4.innerHTML = "<b>HP</b>";
    headerCell5.innerHTML = "<b>속도</b>";
    headerCell6.innerHTML = "<b>방어력</b>";
    headerCell7.innerHTML = "<b>크리율</b>";
    headerCell8.innerHTML = "<b>크리데미지</b>";
    headerCell9.innerHTML = "<b>협공</b>";
    headerCell10.innerHTML = "<b>효과적중</b>";
    headerCell11.innerHTML = "<b>효과저항</b>";


    bodyCell1.innerHTML = matchingData["name"];
    bodyCell2.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["cp"];
    bodyCell3.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["atk"];
    bodyCell4.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["hp"];
    bodyCell5.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["spd"];
    bodyCell6.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["def"];
    bodyCell7.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["chc"]*100+"%";
    bodyCell8.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["chd"]*100+"%";
    bodyCell9.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["dac"]*100+"%";
    bodyCell10.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["eff"]*100+"%";
    bodyCell11.innerHTML = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["efr"]*100+"%";

    //f.baseAttackInput.value = matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["atk"];
    $('input[id=baseAttackInput]').attr('value',matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["atk"]);
    $('input[id=baseLifeInput]').attr('value',matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["hp"]);
    $('input[id=baseDefInput]').attr('value',matchingData["calculatedStatus"]["lv60SixStarFullyAwakened"]["def"]);

    // 결과를 HTML 태그에 출력하기
    var heroTableDiv = document.getElementById("heroDataDiv");
    heroTableDiv.innerHTML = "<br>";
    heroTableDiv.appendChild(heroTable);
}
    

function Chking() {
    var sInp1 = $('input[id=seting1Input]').val();
    var sInp2 = $('input[id=seting2Input]').val();
    var sInp3 = $('input[id=seting3Input]').val();
    var sInp4 = $('input[id=seting4Input]').val();

    var cSel1 = $('select[id=changeSet1Select] option:selected').attr('value');
    var cSel2 = $('select[id=changeSet2Select] option:selected').attr('value');
    var cSel3 = $('select[id=changeSet3Select] option:selected').attr('value');
    var cSel4 = $('select[id=changeSet4Select] option:selected').attr('value');

    //alert(cSel1 + " " + cSel2);

    if(sInp1 && sInp2 && sInp3 && sInp4) {
        $('input[id=totalInput]').attr('value', Math.round(parseFloat(OptionChk(cSel1,sInp1)) + parseFloat(OptionChk(cSel2,sInp2)) + parseFloat(OptionChk(cSel3,sInp3)) + parseFloat(OptionChk(cSel4,sInp4))));

        $('input[id=p1]').attr('value', Math.round(OptionChk(cSel1,sInp1)*10)/10 + '%');
        $('input[id=p2]').attr('value', Math.round(OptionChk(cSel2,sInp2)*10)/10 + '%');
        $('input[id=p3]').attr('value', Math.round(OptionChk(cSel3,sInp3)*10)/10 + '%');
        $('input[id=p4]').attr('value', Math.round(OptionChk(cSel4,sInp4)*10)/10 + '%');

        
    } else {
        return false;
    }
}

function OptionChk(val, data) {
    if((val == "crit_rate")) {
        data = data * 1.5;
        return data;
    } else if((val == "crit_damage")) {  
        data = data * 1.1;
        return data;
    } else if((val == "speed")) {
        data = data * 2;
        return data;
    } else if ((val == "att")) {
        var f = $('input[id=baseAttackInput]').attr('value');
        if(f > 500) {
        data = (data / f)*100;
        return data;
        } else {
        return 0;
        }
    } else if ((val == "life")) {
        var f = $('input[id=baseLifeInput]').attr('value');
        if(f > 3800) {
        data = (data / f)*100;
        return data;
        } else {
        return 0;
        }
    } else if ((val == "def")) {
        var f = f = $('input[id=baseDefInput]').attr('value');
        if(f > 450) {
        data = (data / f)*100;
        return data;
        } else {
        return 0;
        }
    } else
        return data;
}

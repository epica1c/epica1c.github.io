---
layout: page
title: 장비 점수 계산기
icon: fas fa-calculator
order: 1
---


<script src="/assets/js/data/jquery-3.6.4.min.js"></script>
<script type="text/javascript">
    var str;
    var trans;
    // alert('제발돼라');

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
    error : function() { alert('error2'); } // data 불러오기 실패시 error 출력
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
    
</script>
<body>
    <style type="text/css">
        .tg  {border-collapse:collapse;border-color:#9ABAD9;border-spacing:0;}
        .tg td{background-color:#F4F6F6;border-color:#9ABAD9;border-style:solid;border-width:0px;color:#444;
        font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 7px;word-break:normal; text-align: center;}
        .tg th{background-color:#5D6D7E;border-color:#9ABAD9;border-style:solid;border-width:0px;color:#fff;
        font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 7px;word-break:normal; text-align: center;}
        .tg .tg-phtq{background-color:#EAEDED;border-color:inherit;text-align:center;vertical-align:top}
        .tg .tg-0pky{border-color:inherit;text-align:center;vertical-align:top}
        select {
            width: 200px; 
            padding: .8em .5em; 
            border: 1px solid #999;
            font-family: inherit;  
            background: url('arrow.jpg') no-repeat 95% 50%; 
            border-radius: 0px; 
            -webkit-appearance: none; 
            -moz-appearance: none;
            appearance: none;
        }
        select::-ms-expand {
            display: none;
        }
    </style>
    <div style="width:50%;float:left;">
    <form name="frm">
    <table class="tg">
    <thead>
    <tr>
        <th colspan="4" style="text-align: left;">
        <select id="heroList" title="영웅을 선택하세요" class="form-control custom-select selectpicker" name="hero" data-size="12" data-show-subtext="true" onchange="showHeroData();">
            <option id="">영웅 선택</option>
        </select>
        </th>
    </tr>
    </thead>
    <tr>
        <th class="tg-0pky">
        <input type="number" title="영웅의 기초 공격력" class="form-control" style="width:120px; text-align: center;vertical-align: middle;" id="baseAttackInput" placeholder="공격력" min=0 value="" onmouseup="Chking();" onKeyPress="Chking();" onKeyUp="Chking();">
        </th>
        <th class="tg-0pky">
        <input type="number" title="영웅의 기초 생명력" class="form-control" style="width:120px; text-align: center;vertical-align: middle;" id="baseLifeInput" placeholder="생명력" min=0 value="" onmouseup="Chking();" onKeyPress="Chking();" onKeyUp="Chking();">
        </th>
        <th class="tg-0pky">
        <input type="number" title="영웅의 기초 방어력" class="form-control" style="width:120px; text-align: center;vertical-align: middle;" id="baseDefInput" placeholder="방어력" min=0 value="" onmouseup="Chking();" onKeyPress="Chking();" onKeyUp="Chking();">
        </th>
        <th class="tg-0pky">           
        </th>
    </tr>
    <tbody>
    <tr>
        <td class="tg-phtq">
        <select id="changeSet1Select" title="퍼센트 공격력, 생명력, 방어력, 적중, 저항, 치명피해 옵션은 변경하지 마세요" name="changeSet1Select" class="form-control custom-select selectpicker" data-size="12" data-show-subtext="true" onchange="Chking();">
            <option value="">부옵션1</option>
            <option data-divider="true"></option>
            <option value="att">공격력</option>
            <option value="life">생명력</option>
            <option value="def">방어력</option>
            <option value="speed">속도</option>
            <option value="crit_rate">치명확률</option>
            <option value="crit_damage">치명피해</option>
        </select>
        </td>
        <td class="tg-phtq" colspan="2">
        <input type="number" class="form-control text-center" id="seting1Input" min=0 value="0" onmouseup="Chking();" onKeyPress="Chking();" onKeyUp="Chking();">
        </td>
        <td class="tg-phtq">
        <input type="text" class="form-control text-center" id="p1" value="" readonly style="width:80px; text-align: center;vertical-align: middle;">
        </td>
    </tr>
    <tr>
        <td class="tg-0pky">
        <select id="changeSet2Select" title="퍼센트 공격력, 생명력, 방어력, 적중, 저항, 치명피해 옵션은 변경하지 마세요" name="changeSet2Select" class="form-control custom-select selectpicker" data-size="12" data-show-subtext="true" onchange="Chking();">
            <option value="">부옵션2</option>
            <option data-divider="true"></option>
            <option value="att">공격력</option>
            <option value="life">생명력</option>
            <option value="def">방어력</option>
            <option value="speed">속도</option>
            <option value="crit_rate">치명확률</option>
            <option value="crit_damage">치명피해</option>
        </select>
        </td>
        <td class="tg-0pky" colspan="2">
        <input type="number" class="form-control text-center" id="seting2Input" min=0 value="0" onmouseup="Chking();" onKeyPress="Chking();" onKeyUp="Chking();">
        </td>
        <td class="tg-phtq">
        <input type="text" class="form-control text-center" id="p2" value="" readonly style="width:80px; text-align: center;vertical-align: middle;">
        </td>
    </tr>
    <tr>
        <td class="tg-phtq">
        <select id="changeSet3Select" title="퍼센트 공격력, 생명력, 방어력, 적중, 저항, 치명피해 옵션은 변경하지 마세요" name="changeSet3Select" class="form-control custom-select selectpicker" data-size="12" data-show-subtext="true" onchange="Chking();">
            <option value="">부옵션3</option>
            <option data-divider="true"></option>
            <option value="att">공격력</option>
            <option value="life">생명력</option>
            <option value="def">방어력</option>
            <option value="speed">속도</option>
            <option value="crit_rate">치명확률</option>
            <option value="crit_damage">치명피해</option>
        </select>
        </td>
        <td class="tg-phtq" colspan="2">
        <input type="number" class="form-control text-center" id="seting3Input" min=0 value="0" onmouseup="Chking();" onKeyPress="Chking();" onKeyUp="Chking();">
        </td>
        <td class="tg-phtq">
        <input type="text" class="form-control text-center" id="p3" value="" readonly style="width:80px; text-align: center;vertical-align: middle;">
        </td>
    </tr>
    <tr>
        <td class="tg-0pky">
        <select id="changeSet4Select" title="퍼센트 공격력, 생명력, 방어력, 적중, 저항, 치명피해 옵션은 변경하지 마세요" name="changeSet4Select" class="form-control custom-select selectpicker" data-size="12" data-show-subtext="true" onchange="Chking();">
            <option value="">부옵션4</option>
            <option data-divider="true"></option>
            <option value="att">공격력</option>
            <option value="life">생명력</option>
            <option value="def">방어력</option>
            <option value="speed">속도</option>
            <option value="crit_rate">치명확률</option>
            <option value="crit_damage">치명피해</option>
        </select>
        </td>
        <td class="tg-0pky" colspan="2">
        <input type="number" class="form-control text-center" id="seting4Input" min=0 value="0" onmouseup="Chking();" onKeyPress="Chking();" onKeyUp="Chking();">
        </td>
        <td class="tg-phtq">
        <input type="text" class="form-control text-center" id="p4" value="" readonly style="width:80px; text-align: center;vertical-align: middle;">
        </td>
    </tr>
    <tr>
        <td class="tg-phtq text-center" style="width:100px; vertical-align: middle;">
        점수
        </td>
        <td class="tg-phtq" colspan="2" title="치명피해 1.1배, 치확 1.5배, 속도 2배 그외 일괄 1점">
        <input type="number" class="form-control text-center" id="totalInput" value="" readonly>
        </td>
        <td class="tg-phtq">
        </td>
    </tr>
    <tr>
        <td colspan="4" style="text-align: left;">
        치명피해 1.1배<br>
        치확 1.5배<br>
        속도 2배<br>
        그외 일괄 1점<br><br>11
        깡스텟, 치명타스텟, 속도일 경우에만 앞에 목록에서 <br> 
        맞는 능력치를 선택하시면 됨
        </td>
    </tr>
    </tbody>
    </table>
    </form>
    </div>
    <div id="heroDataDiv" style="width:30%;float:right;">            
    </div>
</body>
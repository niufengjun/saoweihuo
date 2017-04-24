window.onload=function(){
    var judge=0;
    var oSure=1;;
    if ('userRealName' in Json()()){//在获取的Json数据有userRealName数据时
        var JuJson=Json()().userRealName[0]
        //信息正确时的操作
        for(var j in JuJson){
            judge++;
            if (j=='') {
                oSure=0;
            }
        }
        if (judge==12&&('Group' in JuJson)&&(oSure==1)&&!('Bond' in JuJson)) {//获取到的JSON数据为公司数据时且没有提交保证金时
            $('yw_Ch_from').style.display='block';
            $('yw_Che_from').style.display='none';
            aDisplayData()
        }
        else if (judge==9&&('PGroup' in JuJson)&&(oSure==1)&&!('Bond' in JuJson)) {//获取到的JSON数据为个人数据时且没有提交保证金时
            $('yw_Ch_from').style.display='none';
            $('yw_Che_from').style.display='block';
            aDisplayData()
        }
        else if((judge==10||judge==13)&&('Bond' in JuJson)){//获取到的JSON数据正常时且有提交保证金记录时
            window.location='ture_name_ccess.html';
        }
        else{
            alert('网络出现问题了,请刷新页面');
        }
    }
    else if(!('userRealName' in Json()())){//在获取的Json数据没有userRealName数据时
        //综合模块
       oComorehensive();
    }
	
}
//所有最顶端的必须调用的封装都在里面
function oComorehensive(){
     //公司数据
        oChangeIme(getClass('UpLoadTo'),getClass('Upload'),getClass('UpLoadOut'),'Dg_User');
        //个人数据
        oChangeIme(getClass('PersonalTo'),getClass('Personal'),getClass('PersonalOut'),'Person');
        //公司按钮
        oBtn('yw_cocfirm_button',12);
        //个人按钮
        oBtn('yw_obutton',9);
        // oBtn1();
        //填写数据时公司和个人切换时的清零操作
        onBlock();
}
//封装一个表单发生事件时内容验证函数
function oChangeIme(oUt,oUd,oUo,iclass){
    if ('userRealName' in Json()()) {
            userRealName=Json()().userRealName;
        }
    for (var i = 0; i < oUt.length; i++) {
        oUt[i].index=i;
        oUt[i].onchange=function(){
            imgPreview(this,oUd[this.index],oUo[this.index]);
        }
    }
    var oUser=getClass(iclass);
    
    for (var i = 0; i < oUser.length; i++) {
        oUser[i].index=i;
        oUser[i].onchange=function(){
            var oValue=this.id;
            userRealName[0][oValue]=this.value;
            if (oValue=='Name') {
                var q='请输入8个字以内的中文或英文字母';
                var t=(!/^\w{1,8}$|^[\u4e00-\u9fa5]{1,8}$/.test(this.value));
                oRegular(t,this,oValue,q);
            }
            else if (oValue=='LawName'||oValue=='PLawName') {
                var q='英文名最多20位，中文名5个字以内';
                var t=(!/^[a-zA-Z]{1,20}$|^[\u4e00-\u9fa5]{1,5}$/.test(this.value));
                oRegular(t,this,oValue,q);
            }
            else if (oValue=='BankFullName'||oValue=='PBankFullName') {
                var q='请输入10字以内的中文';
                var t=(!/^[\u4e00-\u9fa5]{1,10}$/.test(this.value));
                oRegular(t,this,oValue,q);
            }
            else if (oValue=='BankNumber'||oValue=='PBankNumber') {
                var q='位数应该是十九位的数字';
                var t=(!/^[0-9]{19}$/.test(this.value));
                oRegular(t,this,oValue,q);
            }
            else if (oValue=='AccountName') {
                var q='位数应该是八位以内的字符';
                var t=(!/^\w{1,8}$|^[\u4e00-\u9fa5]{1,8}$/.test(this.value));
                oRegular(t,this,oValue,q);
            }
            // console.log(userRealName);
        }
    }
}
//封装一个监测输入数据异常时的提示框
function oRegular(oRe,oTh,vo,q){
    if (oRe) {
        userRealName[0][vo]='';
        oTh.value=q;
        oTh.style.borderColor='red';
        oTh.style.color='red';
    }
    else{
        oTh.style.borderColor='';
        oTh.style.color='#313031';
    }
}
// 模拟用户信息数据
function Json(){
    // 用户没有注册时的数据
    // var aJson={'userId':"3101891",
    //         'userName':"139144556"
    //     }

    // 公司用户审核成功、审核成功、审核失败的数据
    var aJson={'userId':"3101891",
            'userName':"139144556",
            'userRealName':[{
                'AccountName':"阿斯蒂芬",
                'AuditStatus':"审核失败",// 'AuditStatus':"等待审核"    'AuditStatus':"审核成功"    'AuditStatus':"审核失败" 审核失败时需要把Json值中对应的key清空
                'BankFullName':"",
                'BankName':"工商银行",
                'BankNumber':"1234567891234567899",
                'DoLicense':"img/u=1235871335,1479785069&fm=117&gp=0.gif",
                'FoodLicense':"img/u=1235871335,1479785069&fm=117&gp=0.gif",
                'Group':"公司",
                'IdBack':"img/u=1235871335,1479785069&fm=117&gp=0.gif",
                'IdPositive':"img/u=1235871335,1479785069&fm=117&gp=0.gif",
                'LawName':"sad",
                'Name':"阿斯蒂芬"
            }]
        }

    //个人用户审核成功、审核成功、审核失败的数据
        // var aJson={'userId':"3101891",
        //     'userName':"139144556",
        //     'userRealName':[{
        //         'AuditStatus':"审核失败", // 'AuditStatus':"等待审核"    'AuditStatus':"审核成功"    'AuditStatus':"审核失败"
        //         'PBankFullName':"使得",
        //         'PBankName':"工商银行",
        //         'PBankNumber':"1234567891234567899",
        //         'PFoodLicense':"img/u=1235871335,1479785069&fm=117&gp=0.gif",
        //         'PGroup':"公司",
        //         'PIdBack':"img/u=1235871335,1479785069&fm=117&gp=0.gif",
        //         'PIdPositive':"img/u=1235871335,1479785069&fm=117&gp=0.gif",
        //         'PLawName':""
        //          // ,'Bond':''  //缴费信息有时说明用户数据早已提交这时跳转页面
        //     }]
        // }
    return function(){
        return aJson;
    }
}
//图片文件上传 Json数据key名是通过获取元素的id创建的key的属性值是事件发生时所产生的数据
//由于有时页面显示的状态刚好满足用户需求所以可能没有产生事件来获取属性值，所以设置了一个默认的属性值
var userRealName=[{Group:"公司",BankName:'工商银行'}];
function imgPreview(fileDom,id,id1){
    var oValue=fileDom.id;
    if (window.FileReader) {
        var reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }
    //获取文件
    var file = fileDom.files[0];
    // 正则表达式
    var tis=/^\b.+\b\.\bpng|jpeg|gif\b$/i;
    if(file.size>=1024*1024){
        id1.innerHTML='图片太大了';
        id1.style.color='red';
        return;
    }
    else if(!tis.test(file.name)){
        id1.innerHTML='图片格式不正确请上传JPEG/GIF/PNG格式';
        id1.style.color='red';
        return; 
    }
    else{
        id1.innerHTML='图片格式支持JPEG/GIF/PNG格式，大小1M以内';
        id1.style.color='#A2A2A2';
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        reader.onload = function(e) {
            //获取图片dom
            id.src = e.target.result;
            userRealName[0][oValue]=e.target.result;
        };
        reader.readAsDataURL(file);
    }  
}
//公司用户提交Json数据按钮
function oBtn(bt,be){
    $(bt).onclick=function(){
        var aSubmitJson=Json()();

        userRealName[0].AuditStatus='等待审核';
        var a=0;
        //用户数据填写检测，防止用户随意提交资料;
        for (var key in userRealName[0]) {
            if(userRealName[0][key]==''){
                alert('对不起，您的信息填写不完整');
                return;
            }
            else{
                a++;
            }
        }
        if(a<be){
            a=0;
            alert('对不起，您的信息填写不完整');
            return;
        }
        //数据填入用户资料
        aSubmitJson.userRealName=userRealName;

        //资料填写完成提示用户 在10秒后自动生产用户填写资料

        $('Dg_block').style.display='block'
        var time=setTimeout(function(){
            $('Dg_block').style.display='none';
            DisplayData();
            clearTimeout(time);
        },10000)
        $('Dg_block').onclick=function(){
            this.style.display='none'
            clearTimeout(time);
            DisplayData();
        }
        this.style.display='none';
        //这是一个等待提交的Json用户注册数据

        //==>     aSubmitJson     <==
        console.log(aSubmitJson);
    }
}
//数据提交后页面状态
function DisplayData(){
    for (var key in userRealName[0]) {
        if (key=='Group'||key=='PGroup') {$(key).innerHTML=userRealName[0][key]}
        if (key=='DoLicense'||key=='FoodLicense'||key=='IdBack'||key== 'IdPositive'||key=='PFoodLicense'||key=='PIdBack'||key== 'PIdPositive') {$(key).parentNode.parentNode.innerHTML='<img src='+userRealName[0][key]+'>'}
        if (key=='BankFullName'||key=='BankName'||key=='BankNumber'||key=='LawName'||key=='Name'||key=='AccountName'||key=='PBankFullName'||key=='PBankName'||key=='PBankNumber'||key=='PLawName') {$(key).parentNode.innerHTML=userRealName[0][key]}
        $('Dg_Prompt').innerHTML='实名认证审核中...';
        $('Dg_Prompt').style.color='red';
        $('Dg_Prompt').style.textAlign='center';
    }
}
//二次进入页面审核状态
function aDisplayData(){
    for (var key in Json()().userRealName[0]) {
        if (Json()().userRealName[0].AuditStatus=='审核失败') {
            var enk=0;
            for (var e in Json()().userRealName[0]) {
                enk++;
                if (e=='DoLicense'||e=='FoodLicense'||e=='IdBack'||e== 'IdPositive') {
                    $(e).parentNode.previousSibling.previousSibling.src=Json()().userRealName[0][e]
                }
                if (e=='PFoodLicense'||e=='PIdBack'||e== 'PIdPositive') {
                    $(e).parentNode.previousSibling.previousSibling.src=Json()().userRealName[0][e]
                }
                if (e=='PBankFullName'||e=='PBankName'||e=='PBankNumber'||e=='PLawName') {
                    $(e).value=Json()().userRealName[0][e]
                }
                if (e=='BankFullName'||e=='BankName'||e=='BankNumber'||e=='LawName'||e=='Name'||e=='AccountName') {
                    $(e).value=Json()().userRealName[0][e]
                }
                // if (e.PBankFullName==''||e.PBankName==''||e.PBankNumber==''||e.PLawName==''||e.BankFullName==''||e.BankName==''||e.BankNumber==''||e.LawName==''||e.Name==''||e.AccountName=='') {
                //     $(e).value=''
                // }
                $('Dg_Prompt').innerHTML='审核失败';
                $('Dg_Prompt').style.color='red';
                $('Dg_Prompt').style.textAlign='center';
            }
            oComorehensive();

            return;
        }
        if (key=='Group'||key=='PGroup') {
            $(key).innerHTML=Json()().userRealName[0][key]
        }
        if (key=='DoLicense'||key=='FoodLicense'||key=='IdBack'||key== 'IdPositive'||key=='PFoodLicense'||key=='PIdBack'||key== 'PIdPositive') {
            $(key).parentNode.parentNode.innerHTML='<img src='+Json()().userRealName[0][key]+'>'
        }
        if (key=='BankFullName'||key=='BankName'||key=='BankNumber'||key=='LawName'||key=='Name'||key=='AccountName'||key=='PBankFullName'||key=='PBankName'||key=='PBankNumber'||key=='PLawName') {
            $(key).parentNode.innerHTML=Json()().userRealName[0][key]
        }
        if (Json()().userRealName[0].AuditStatus=='等待审核') {
            $('Dg_Prompt').innerHTML='实名认证审核中...';
            $('Dg_Prompt').style.color='red';
            $('Dg_Prompt').style.textAlign='center';
        }
        if (Json()().userRealName[0].AuditStatus=='审核成功'){
            $('Dg_Prompt').innerHTML='审核成功...10秒后跳转自动跳转到交纳保证金';
            $('Dg_Prompt').style.color='red';
            $('Dg_Prompt').style.textAlign='center';
            $('Dg_loca2').onclick=$('Dg_loca1').onclick=function(){
                window.location='ture_name_ccess.html';
            }
            var oTime=setTimeout(function(){
                clearTimeout(oTime)
                window.location='ture_name_ccess.html';
            },10000);

        }
        
    }
}
//公司和个人切换状态
function onBlock(){
    //公司
    getClass('lable_company')[0].onclick=getClass('lable_company')[1].onclick=function(){
        $('yw_Ch_from').style.display='block';
        $('yw_Che_from').style.display='none';
        $('Dg_lv').checked=true;
        userRealName=[{Group:"公司",BankName:'工商银行'}];
        oRefresh('Dg_User',2,'Upload');
    }
    //个人
    getClass('lable_person')[0].onclick=getClass('lable_person')[1].onclick=function(){
        $('yw_Che_from').style.display='block';
        $('yw_Ch_from').style.display='none';
        $('Dg_le').checked=true;
        userRealName=[{PGroup:"个人",PBankName:'工商银行'}];
        oRefresh('Person',1,'Personal');
    }
}
//封装一个公司注册和个人注册时页面保持清洁的状态
function oRefresh(Us,Nu,Up){
    for (var i = 0; i < getClass(Us).length; i++) {
        if (i==Nu) {
            getClass(Us)[i].value='工商银行';
        }
        else{
            getClass(Us)[i].value='';
        } 
    }
    for (var j = 0; j < getClass(Up).length; j++) {
        getClass(Up)[j].src='';
    }
}
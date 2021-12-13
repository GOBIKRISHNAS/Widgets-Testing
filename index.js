ZOHO.CREATOR.init().then(function(data) {
    config = {
        formName : "Form1",
        data : {
            "data" : {
                Number: 101,
                Single_Line: "Krishna"
            }
        }
    }
    //add record API
    // ZOHO.CREATOR.API.addRecord(config).then(function(response){
    //     //callback block
    //     console.log("addRecord: ", response);
    // });


    config = {
        reportName : "Form1_Report",
        id: "88557000000237003",
        data : {
            "data" : {
                Number: 101,
                Single_Line: "Gobi Krishna S"
            }
        }
    }
    //update record API
    // ZOHO.CREATOR.API.updateRecord(config).then(function(response){
    //     //callback block
    //     console.log("updateRecord: ", response);
    // });


    config = { 
        reportName : "Form1_Report",
        page : 1,
        pageSize : 10
    }
    //get all record API
    // ZOHO.CREATOR.API.getAllRecords(config).then(function(response){
    //     console.log(response);
    // });


    var config = {
        reportName : "Form1_Report", 
        id : "88557000000237003"
    } 
    //get record by Id API
    // ZOHO.CREATOR.API.getRecordById(config).then(function(response){
    //     console.log(response);
    // });


});

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
    ZOHO.CREATOR.API.addRecord(config).then(function(response){
        window.ID = response.data.ID
        console.log("addRecord: ", response);
        config = {
            reportName : "Form1_Report",
            id: ID,
            data : {
                "data" : {
                    Number: 101,
                    Single_Line: "Gobi Krishna S"
                }
            }
        }
        // update record API
        ZOHO.CREATOR.API.updateRecord(config).then(function(response){
            console.log("updateRecord: ", response);
        });
    
    
        config = { 
            reportName : "Form1_Report",
            page : 1,
            pageSize : 10
        }
        //get all record API
        ZOHO.CREATOR.API.getAllRecords(config).then(function(response){
            console.log(response);
        });
    
    
        var config = {
            reportName : "Form1_Report", 
            id : ID
        } 
        //get record by Id API
        ZOHO.CREATOR.API.getRecordById(config).then(function(response){
            console.log(response);
        });
    
        var config = { 
            reportName : "Form1_Report", 
            criteria : "(Single_Line == \"Gobi Krishna s\")"
        } 
        //delete record API
        ZOHO.CREATOR.API.deleteRecord(config).then(function(response){
            console.log(response);
        });
    });
});


function uploadFileAPI() {
    var fileObject = document.getElementById("fileInput").files[0];
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
        ZOHO.CREATOR.API.addRecord(config).then(function(response){
            window.ID = response.data.ID
            console.log("addRecord: ", response);
            config = { 
                reportName : "Form1_Report", 
                id : ID,
                fieldName : "Attachments",
                file : fileObject
            } 
            //upload file API
            ZOHO.CREATOR.API.uploadFile(config).then(function(response){
                console.log("File uploaded successfully");
            });
        });

    });
}
ZOHO.CREATOR.init().then(function(data) {
    console.log(data);
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
        //callback block
        console.log("addRecord: ", response);
    });
});
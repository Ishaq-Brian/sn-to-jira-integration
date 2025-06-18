(function executeRule(current, previous /*null when async*/) {
    // Jira API endpoint
    var endpoint = 'https://net2apps-team-hruciw9e.atlassian.net/rest/api/3/issue';

    // Jira authentication
    var user = ""; // Jira UserName
    var apiToken = ""; // Best store securely in sys_properties or credentials

    var payload = {
        fields: {
            project: { key: "PM" },
            summary: "Doing Great Brian_v.1.",
            issuetype: { name: "Bug" },
            reporter: { id: "712020:ad7a6a3e-93a8-47e4-ad4a-fad16976f1c1" }
        }
    };

    // REST message
    var request = new sn_ws.RESTMessageV2();
    request.setEndpoint(endpoint);
    request.setHttpMethod('POST');
    request.setRequestBody(JSON.stringify(payload));
    request.setBasicAuth(user, apiToken);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");

    // Execute 
    var response = request.execute();
    var status = response.getStatusCode();
    var responseBody = response.getBody();

    // Log 
    gs.log("Jira API Status: " + status);
    gs.log("Jira API Response: " + responseBody);

})(current, previous);
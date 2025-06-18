    var request = new sn_ws.RESTMessageV2();
    request.setEndpoint('https://net2apps-team-hruciw9e.atlassian.net/rest/api/3/search?jql=project%20%3D%20PM');
    request.setHttpMethod('GET');
    var user = "";
    var ApiToken = "";

    request.setBasicAuth(user, ApiToken);
    request.setRequestHeader("Accept", "application/json");

    var response = request.execute();
    var parsedData = JSON.parse(response.getBody());
    var loop = parsedData.total - 1;
    for (var i = 0; i <= loop; i++) {
        var grStory = new GlideRecord('rm_story');
        grStory.addQuery('u_jira_non_duplicate', parsedData.issues[i].key);
        grStory.query();
        if (!grStory.next()) {
            var grStoryCreate = new GlideRecord('rm_story');
            grStoryCreate.initialize();
            grStoryCreate.short_description = parsedData.issues[i].fields.summary;
            grStoryCreate.u_jira_non_duplicate = parsedData.issues[i].key;
            grStoryCreate.insert();
        }
    }
    gs.log("IB_sec_repo: " + response.getBody());
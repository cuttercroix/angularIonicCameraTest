CKEDITOR.plugins.add("ccusertag", {
    init: function (editor) {
        var autoConfig = {};

        function textTestCallback(range) {
            if (!range.collapsed)
            {
                return null;
            }

            return CKEDITOR.plugins.textMatch.match(range, matchCallback);
        }

        function matchCallback(text, offset) {
            var left = text.slice(0, offset)
            // Will look for a '@' character followed by some text, but only if preceded by a space, OR if preceded by the start of the string                
            var match = left.match(/\s+@\w*$|^@[\w\-\s]*$/);

            if (!match)
            {
                return null;
            }
            return { start: match.index, end: offset };
        }

        autoConfig.textTestCallback = textTestCallback;

        function isMatch(searchText, itemText)
        {
            return itemText && itemText.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        }

        function isItemMatch(searchtext, item)
        {
            var firstNameHit = isMatch(searchtext, item.FirstName);
            var lastNameHit = isMatch(searchtext, item.LastName);
            var emailHit = isMatch(searchtext, item.EmailAddress); 
            return firstNameHit || lastNameHit || emailHit;
        }

        function processResults(matchInfo, callback)
        {
            var query = matchInfo.query.trim().substring(1);
            var existingUsers = window.CkEditorExistingUsers;
            if (!existingUsers)
            {
                existingUsers = [];
            }
            var itemsArray = [];

            if ("allusersonjob".indexOf(query.toLowerCase()) > -1)
            {
                itemsArray.push(
                {
                    id: -1,
                    name: "AllUsersOnJob",
                    email: "Assigned To & All User Contacts",
                    imgUrl: "/assets/ShowFloor/icons/userPlaceholder.jpg"
                });
            }

            existingUsers.forEach((item, i) =>
            {
                var doShow = false;
                if (query && query.length > 0)
                {
                    var splitQuery = query.split(" ");
                    var matchesAll = true;
                    for (var i = 0; i < splitQuery.length; i++)
                    {
                        var entry = splitQuery[i];
                        var isMatch = isItemMatch(entry, item);
                        if (!isMatch)
                        {
                            matchesAll = false;
                        }
                    }

                    doShow = matchesAll;
                }
                else
                {
                    doShow = true;
                }

                if (doShow)
                {
                    var result = {
                        id: item.Id,
                        name: item.FirstName + " " + item.LastName,
                        email: item.EmailAddress
                    }
    
                    var imgUrl = "/assets/ShowFloor/icons/userPlaceholder.jpg";
                    if (item.PictureId)
                    {
                        imgUrl = "/Api/Document/Download/" + item.PictureId;
                    }
    
                    result.imgUrl = imgUrl;
    
                    itemsArray.push(result);

                }
                
            })

            callback(itemsArray);
        }

        function dataCallback(matchInfo, callback) {
            if (window.CkEditorExistingUsers)
            {
                processResults(matchInfo, callback);
            }
            else
            {
                var apiUrl = window.CkEditorApiUrl;
                var orgId = window.CkEditorOrgId;
                var workId = window.CkEditorWorkId;
                if (apiUrl)
                {
                    var url = apiUrl + "/Api/Organization/GetAssignedToUsersLite?organizationId=" + orgId;
    
                    if (workId)
                    {
                        url += "&workId=" + workId;
                    }
                    
                    $.ajax(
                    {
                        method: "GET",
                        url: url,
                        xhrFields:
                        {
                            withCredentials: true
                        },
                        success: function (response)
                        {
                            if (response.Exception || !response.Items)
                            {
                                window.CkEditorExistingUsers = [];
                                processResults(matchInfo, callback);
                            }
                            else
                            {
                                window.CkEditorExistingUsers = response.Items;
                                processResults(matchInfo, callback);
                            }
                        },
                        error: function (error)
                        {
                            window.CkEditorExistingUsers = [];
                            processResults(matchInfo, callback);
                        }
                    });
                }
                else
                {
                    window.CkEditorExistingUsers = [];
                    processResults(matchInfo, callback);
                }
            }
        }

        autoConfig.dataCallback = dataCallback;
        autoConfig.itemTemplate = "<li data-id={id} title='{email}'><div class='row'><div class='col-xs-2'><div class='pt5'><img src={imgUrl} class='imgCircle userProfile'/></div></div><div class='col-xs-10'><div class='row'><div class='p5 f14'>{name}</div></div><div class='row'><div class='pr5 pl5 f10 truncate'>{email}</div></div></div></div></li>"
        autoConfig.outputTemplate = "<span class='ccUserTag' uid={id} style='font-weight:bold; color:#94c952' title='{email}'>&nbsp;{name}</span>&nbsp;";

        new CKEDITOR.plugins.autocomplete(editor, autoConfig);
    }
})
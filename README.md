MyMap



Retrieving location detail from OpenMRS and displaying it on a map.


I set up OpenMRS locally on my Tomcat Server and i am fetching the data from 
OpenMRS from the URL  http://localhost:8080/openmrs/ws/rest/v1/location?v=full.
The reponse i am getting is:


{
   "results":[
      {
         "uuid":"8d6c993e-c2cc-11de-8d13-0010c6dffd0f",
         "display":"Unknown Location",
         "name":"Unknown Location",
         "description":null,
         "address1":"",
         "address2":"",
         "cityVillage":"",
         "stateProvince":"",
         "country":"",
         "postalCode":"",
         "latitude":null,
         "longitude":null,
         "countyDistrict":null,
         "address3":null,
         "address4":null,
         "address5":null,
         "address6":null,
         "tags":[

         ],
         "parentLocation":null,
         "childLocations":[

         ],
         "retired":false,
         "auditInfo":{
            "creator":{
               "uuid":"8a53ea84-a15b-11e3-8e50-7b821c04c0b8",
               "display":"admin",
               "links":[
                  {
                     "uri":"http://localhost:8080/openmrs/ws/rest/v1/user/8a53ea84-a15b-11e3-8e50-7b821c04c0b8",
                     "rel":"self"
                  }
               ]
            },
            "dateCreated":"2005-09-22T00:00:00.000+0530",
            "changedBy":null,
            "dateChanged":null
         },
         "attributes":[

         ],
         "links":[
            {
               "uri":"http://localhost:8080/openmrs/ws/rest/v1/location/8d6c993e-c2cc-11de-8d13-0010c6dffd0f",
               "rel":"self"
            }
         ],
         "resourceVersion":"1.9"
      }
   ]
}


As lat and long are NULL , i replaced my own values in the response and displayed it on map.
The details about models,views,stores are in their respective README documents.


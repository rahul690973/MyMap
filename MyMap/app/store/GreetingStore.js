Ext.define('MyMap.store.GreetingStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MyMap.model.GreetingModel',
        proxy: {
            
            type: 'rest',
            url: 'http://localhost:8080/openmrs/ws/rest/v1/location?v=full',

            reader: {
                         type: 'json',
                         rootProperty: 'results'
                    }
        },

        listeners: {
            beforeload: function () {
                alert('beforeload');
                //var name = document.location.search.slice(1);
               // this.getProxy().setExtraParam('name', name);
            }
        }
    }
});
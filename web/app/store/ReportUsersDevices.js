Ext.define('Traccar.store.ReportUsersDevices', {
    extend: 'Ext.data.Store',
    model: 'Traccar.model.Device',

    proxy: {
        type: 'rest',
        url: 'api/reports/devices',
        timeout: Traccar.Style.reportTimeout,
        headers: {
            'Accept': 'application/json'
        },
        listeners: {
            exception: function (proxy, exception) {
                Traccar.app.showError(exception);
            }
        }
    }
});

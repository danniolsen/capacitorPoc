#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(SkStoreViewerPlugin, "OnInstall",
    CAP_PLUGIN_METHOD(onInstall, CAPPluginReturnPromise);
)

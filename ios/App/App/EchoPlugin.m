//
//  EchoPlugin.m
//  App
//
//  Created by Danni Olsen on 08/12/2021.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(EchoPlugin, "Echo",
    CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)


//  EchoPlugin.swift
//  App
//
//  Created by Danni Olsen on 08/12/2021.
//

import Capacitor
import StoreKit

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        
        DispatchQueue.main.async {
            let value = call.getString("appId") ?? ""
            print(value)
            let controller = SKStoreProductViewController()
            controller.loadProduct(withParameters: [SKStoreProductParameterITunesItemIdentifier: value]) { re, er in}
            self.bridge?.viewController?.present(controller, animated: true, completion: {})
        }
    }
}

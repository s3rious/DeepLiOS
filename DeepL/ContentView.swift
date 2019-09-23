//
//  ContentView.swift
//  DeepL
//
//  Created by Leonid Semenov on 22/09/2019.
//  Copyright © 2019 Leonid Semenov. All rights reserved.
//

import SwiftUI
import WebKit

struct ContentView : UIViewRepresentable {
      
    let request: URLRequest
    
    func getScriptSrc() -> String {
        if let filepath = Bundle.main.path(forResource: "Script", ofType: "js") {
            do {
                return try String(contentsOfFile: filepath)
            } catch {
                return ""
            }
        } else {
           return ""
        }
    }
      
    func makeUIView(context: Context) -> WKWebView {
        let script = getScriptSrc()
        let userScript = WKUserScript(source: script, injectionTime: .atDocumentEnd, forMainFrameOnly: false)

        let contentController = WKUserContentController()
        contentController.addUserScript(userScript)
        
        // TODO: add WKScriptMessageHandler to handleInit event and show webview with alfter load
        // contentController.add(self, name: "handleInit")

        let webViewConfiguration = WKWebViewConfiguration()
        webViewConfiguration.userContentController = contentController

        let webView = WKWebView(frame: CGRect.zero, configuration: webViewConfiguration)
        
        return webView
    }
      
    func updateUIView(_ uiView: WKWebView, context: Context) {
        uiView.load(request)
    }
      
}

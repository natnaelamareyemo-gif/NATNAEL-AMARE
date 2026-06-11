package com.example

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.systemBarsPadding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView
import com.example.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {
    private var webView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MyApplicationTheme {
                Scaffold(
                    modifier = Modifier
                        .fillMaxSize()
                        .systemBarsPadding() // Keep webview safe from camera notches & gesture lines
                ) { innerPadding ->
                    // Unused innerPadding is safely consumed because we apply systemBarsPadding to Scaffolding
                    WebViewScreen(modifier = Modifier.fillMaxSize())
                }
            }
        }
    }

    override fun onBackPressed() {
        // Support back-handling so that the user can press the device's back button
        // to return to previous tabs/dialogs in the Web App interface before closing MainActivity!
        if (webView?.canGoBack() == true) {
            webView?.goBack()
        } else {
            super.onBackPressed()
        }
    }

    @Composable
    fun WebViewScreen(modifier: Modifier = Modifier) {
        AndroidView(
            modifier = modifier,
            factory = { context ->
                WebView(context).apply {
                    webView = this
                    
                    // Essential security and functional parameters for local SPAs
                    settings.apply {
                        javaScriptEnabled = true
                        domStorageEnabled = true // Required for progress saving localStorage
                        databaseEnabled = true
                        allowFileAccess = true // Allows assets reading local style sheets and scripts
                        allowContentAccess = true
                        allowFileAccessFromFileURLs = true // Critical for asset references cross-linking
                        allowUniversalAccessFromFileURLs = true
                        useWideViewPort = true
                        loadWithOverviewMode = true
                        textZoom = 100 // Set general standard text zoom percentage
                    }

                    // Link the debugging consoles in streaming views if needed
                    webChromeClient = WebChromeClient()

                    // Handle link loadings: intercept external queries and render local ones!
                    webViewClient = object : WebViewClient() {
                        override fun shouldOverrideUrlLoading(
                            view: WebView?,
                            request: WebResourceRequest?
                        ): Boolean {
                            val url = request?.url?.toString() ?: return false
                            
                            if (url.startsWith("file:///android_asset/")) {
                                // keep navigating internally
                                return false
                            }

                            // Spawn external browser for standard internet links to prevent stuck viewports
                            try {
                                val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
                                context.startActivity(intent)
                            } catch (e: Exception) {
                                e.printStackTrace()
                            }
                            return true
                        }
                    }

                    // Load localized HTML course asset
                    loadUrl("file:///android_asset/index.html")
                }
            }
        )
    }
}


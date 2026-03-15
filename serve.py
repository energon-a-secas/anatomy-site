#!/usr/bin/env python3
"""
Development server for UI Anatomy with automatic cache busting
Run with: python3 serve.py
"""

import http.server
import socketserver
import os
from pathlib import Path

class DevHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add cache-busting headers
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def translate_path(self, path):
        # Default behavior
        return super().translate_path(path)

    def log_message(self, format, *args):
        # Custom logging
        print(f"[DEV] {self.address_string()} - {format % args}")

PORT = 8820

# Change to the site directory
os.chdir('/Users/lucianoadonisvillarroel/Documents/Projects/Personal/anatomy-site')

with socketserver.TCPServer(("", PORT), DevHTTPRequestHandler) as httpd:
    print(f"🚀 UI Anatomy dev server running at http://localhost:{PORT}/")
    print("📁 Serving files from:", os.getcwd())
    print("💡 Cache-busting headers enabled")
    print("🔍 Check server.log for details")

    # Redirect stderr to log file
    import sys
    log_file = open('server.log', 'w')
    sys.stderr = log_file

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✋ Shutting down server...")
        log_file.close()

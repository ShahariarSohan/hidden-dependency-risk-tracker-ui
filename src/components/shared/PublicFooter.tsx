import Link from "next/link";

function PublicFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-bold text-lg mb-2">HDRT</h3>
            <p className="text-sm text-muted-foreground">
              Hidden Dependency Risk Tracker — enabling organizations to
              identify and mitigate operational risks before they escalate.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-muted-foreground hover:text-foreground"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-muted-foreground hover:text-foreground"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Email: support@hdrt.com
              <br />
              Chattagram, Bangladesh
              <br />
              For enterprise inquiries, reach out anytime.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} HDRT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;

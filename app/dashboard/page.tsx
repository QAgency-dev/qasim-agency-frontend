import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/placeholder-logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Qasim Agency</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button>
              Sign Up <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Manage Your Agency with Ease
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-8">
              Qasim Agency provides the tools you need to streamline your workflow, manage clients, and grow your business.
            </p>
            <Button size="lg">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
              <p className="text-lg text-gray-500">
                Everything you need to run a successful agency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Client Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Keep track of all your clients and their projects in one place.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor project progress and deadlines with our intuitive interface.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Invoicing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Generate and send invoices to your clients with just a few clicks.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; 2025 Qasim Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
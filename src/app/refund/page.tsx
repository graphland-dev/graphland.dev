export default function RefundPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-6">Return and Refund Policy</h1>
            <p className="mb-4">
                At Graphland, we are committed to ensuring your satisfaction with our
                services. If you are not completely satisfied with the results of our
                work, we offer a return and refund policy as outlined below.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Eligibility for Refunds</h2>
            <p className="mb-4">
                To be eligible for a refund, you must meet the following criteria:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>You must have completed the project and received the final deliverables.</li>
                <li>You must have provided clear and specific feedback during the project.</li>
                <li>You must have communicated any issues or concerns within 14 days of receiving the final deliverables.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <p className="mb-4">
                If you believe you are eligible for a refund, please contact us at
                <a href="mailto:hello@graphland.dev" className="text-blue-500 hover:underline">
                    hello@graphland.dev
                </a>
                . Please include your project details, reason for the refund request, and
                any supporting documentation so we can review your case promptly.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Refund Timeline</h2>
            <p className="mb-4">
                Once your refund claim has been submitted and approved, please allow a
                standard processing time of <strong>7 to 10 working days</strong> for the
                refund to be completed. The refund will be issued to the original payment
                method used during the transaction. Please note that depending on your
                bank or payment provider, it may take additional time for the refunded
                amount to appear in your account.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Non-Refundable Items</h2>
            <p className="mb-4">
                The following are not eligible for a refund:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Services that have been fully delivered and approved by the client.</li>
                <li>Any custom-developed solutions, source code, or design assets that have been handed over to the client.</li>
                <li>Subscription-based services that have already been used during the billing period.</li>
                <li>Third-party tools, plugins, licenses, or services purchased on behalf of the client.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
            <p className="mb-4">
                <strong>
                    Graphland does not offer a cancellation policy for any of its
                    services or products.
                </strong>{" "}
                Once a project has been initiated, work has commenced, or a service
                agreement has been signed, the engagement is considered final and cannot
                be cancelled. All sales are therefore treated as final sales, and
                refunds (where applicable) are governed solely by the eligibility
                criteria and process described in this Return and Refund Policy.
            </p>
            <p className="mb-4">
                If you have questions or concerns before starting a project, please
                contact us at
                <a href="mailto:hello@graphland.dev" className="text-blue-500 hover:underline">
                    hello@graphland.dev
                </a>
                {" "}and our team will be happy to assist you.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
                If you have any questions about this Return and Refund Policy, please
                reach out to us at
                <a href="mailto:hello@graphland.dev" className="text-blue-500 hover:underline">
                    hello@graphland.dev
                </a>
                .
            </p>
        </div>
    );
}

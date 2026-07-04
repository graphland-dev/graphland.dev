"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

/**
 * PDF layout for the booking invoice. Rendered with `@react-pdf/renderer`
 * and streamed to the browser as a `.pdf` download. We intentionally keep
 * the styling self-contained (no external CSS / fonts) so the document
 * renders identically regardless of the host environment.
 */

interface InvoicePdfProps {
  invoiceId: string;
  invoiceStatus: string;
  amount: number;
  currency: string;
  description?: string | null;
  customer: {
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
  };
  client: {
    displayName: string;
    logoUrl?: string;
  };
  identifier: string;
  issueDate: string;
}

const PRIMARY = "#dff94b"; // sky-500 — matches the site's primary accent
const INK = "#0a0a0a";
const MUTED = "#737373";
const BORDER = "#e5e5e5";
const SOFT_BG = "#fafafa";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 56,
    paddingHorizontal: 48,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: INK,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 28,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  brandMark: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: PRIMARY,
    color: "#000000",
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    paddingTop: 6,
  },
  brandName: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  brandSub: {
    fontSize: 8,
    color: MUTED,
    marginTop: 2,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  invoiceMeta: {
    textAlign: "right",
  },
  invoiceTitle: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: INK,
    letterSpacing: 0.5,
  },
  invoiceSub: {
    fontSize: 9,
    color: MUTED,
    marginTop: 2,
  },
  statusPill: {
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    alignSelf: "flex-end",
  },
  statusPaid: {
    color: "#047857",
    backgroundColor: "#d1fae5",
  },
  statusPending: {
    color: "#b45309",
    backgroundColor: "#fef3c7",
  },
  statusOther: {
    color: "#b91c1c",
    backgroundColor: "#fee2e2",
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    marginVertical: 16,
  },
  metaGrid: {
    flexDirection: "row",
    gap: 24,
  },
  metaCol: {
    flex: 1,
  },
  metaLabel: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: INK,
  },
  metaValueMuted: {
    fontSize: 10,
    color: INK,
    marginTop: 2,
    lineHeight: 1.4,
  },
  sectionTitle: {
    fontSize: 9,
    color: MUTED,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  lineItemsTable: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 6,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: SOFT_BG,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  tableHeaderCell: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    fontFamily: "Helvetica-Bold",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  cellDescription: {
    flex: 3,
    paddingRight: 8,
  },
  cellQty: {
    flex: 1,
    textAlign: "right",
  },
  cellAmount: {
    flex: 1.2,
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: INK,
  },
  itemMeta: {
    fontSize: 9,
    color: MUTED,
    marginTop: 2,
  },
  totalsWrap: {
    marginTop: 12,
    alignSelf: "flex-end",
    width: 220,
  },
  totalsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  totalsLabel: {
    fontSize: 10,
    color: MUTED,
  },
  totalsValue: {
    fontSize: 10,
    color: INK,
  },
  grandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: INK,
  },
  grandLabel: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  grandValue: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 48,
    right: 48,
    textAlign: "center",
    fontSize: 8,
    color: MUTED,
    lineHeight: 1.5,
  },
  noteBox: {
    marginTop: 20,
    padding: 12,
    backgroundColor: SOFT_BG,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: PRIMARY,
  },
  noteLabel: {
    fontSize: 8,
    color: MUTED,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  noteText: {
    fontSize: 10,
    color: INK,
    lineHeight: 1.5,
  },
});

function formatMoney(amount: number, currency: string) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount.toFixed(2)} ${currency}`;
  }
}

function statusStyle(status: string) {
  if (status === "paid") return styles.statusPaid;
  if (status === "pending") return styles.statusPending;
  return styles.statusOther;
}

export function InvoiceDocument(props: InvoicePdfProps) {
  const {
    invoiceId,
    invoiceStatus,
    amount,
    currency,
    description,
    customer,
    client,
    identifier,
    issueDate,
  } = props;

  return (
    <Document
      title={`Invoice ${invoiceId}`}
      author={client.displayName}
      subject={`Invoice ${invoiceId}`}
      creator={client.displayName}
      producer="Graphland Invoice"
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header} fixed>
          <View>
            <View style={styles.brand}>
              <Text style={styles.brandMark}>G</Text>
              <View>
                <Text style={styles.brandName}>graphland</Text>
                <Text style={styles.brandSub}>Software & Services</Text>
              </View>
            </View>
            <View style={{ marginTop: 14 }}>
              <Text style={styles.metaLabel}>From</Text>
              <Text style={{
                ...styles.metaValue,
                textTransform: "uppercase"
              }}>
                {client.displayName}
              </Text>
              <Text style={styles.metaValueMuted}>
                hello@graphland.dev
                {"\n"}graphland.dev
              </Text>
            </View>
          </View>

          <View style={styles.invoiceMeta}>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <Text style={styles.invoiceSub}>#{invoiceId}</Text>
            <View style={[styles.statusPill, statusStyle(invoiceStatus)]}>
              <Text>{invoiceStatus}</Text>
            </View>
            <View style={{ marginTop: 14 }}>
              <Text style={styles.metaLabel}>Issue date</Text>
              <Text style={styles.metaValue}>{issueDate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.hr} />

        {/* Bill-to + Reference */}
        <View style={styles.metaGrid}>
          <View style={styles.metaCol}>
            <Text style={styles.metaLabel}>Billed to</Text>
            <Text style={styles.metaValue}>{customer.name ?? "—"}</Text>
            <Text style={styles.metaValueMuted}>
              {customer.email ?? ""}
              {customer.phone ? `\n${customer.phone}` : ""}
              {customer.address ? `\n${customer.address}` : ""}
            </Text>
          </View>
          <View style={styles.metaCol}>
            <Text style={styles.metaLabel}>Reference</Text>
            <Text style={styles.metaValue}>{identifier}</Text>
            <Text style={styles.metaValueMuted}>
              Idempotency key — keep for your records.
            </Text>
          </View>
        </View>

        {/* Line items */}
        <View style={{ marginTop: 28 }}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.lineItemsTable}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.cellDescription]}>
                Description
              </Text>
              <Text style={[styles.tableHeaderCell, styles.cellQty]}>Qty</Text>
              <Text style={[styles.tableHeaderCell, styles.cellAmount]}>
                Amount
              </Text>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.cellDescription}>
                <Text style={styles.itemTitle}>
                  {description || "Service booking"}
                </Text>
                <Text style={styles.itemMeta}>
                  Booking #{invoiceId} • {client.displayName}
                </Text>
              </View>
              <Text style={styles.cellQty}>1</Text>
              <Text style={styles.cellAmount}>
                {formatMoney(amount, currency)}
              </Text>
            </View>
          </View>

          {/* Totals */}
          <View style={styles.totalsWrap}>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>Subtotal</Text>
              <Text style={styles.totalsValue}>
                {formatMoney(amount, currency)}
              </Text>
            </View>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>Tax</Text>
              <Text style={styles.totalsValue}>—</Text>
            </View>
            <View style={styles.grandRow}>
              <Text style={styles.grandLabel}>Total</Text>
              <Text style={styles.grandValue}>
                {formatMoney(amount, currency)}
              </Text>
            </View>
          </View>
        </View>

        {/* Thank-you note */}
        <View style={styles.noteBox}>
          <Text style={styles.noteLabel}>Thank you</Text>
          <Text style={styles.noteText}>
            Your booking is confirmed. A team member from {client.displayName}{" "}
            will follow up by email within 1 business day to kick off the
            project. If you have any questions, simply reply to the confirmation
            email.
          </Text>
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `${client.displayName} • Invoice #${invoiceId} • Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

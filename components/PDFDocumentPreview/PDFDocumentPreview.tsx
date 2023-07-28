import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Html from 'react-pdf-html';

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default function PDFDocumentPreview({ content }) {
  return (
    <Document>
      <Page style={styles.page}>
        {Array.isArray(content) && content.map((item, index) => (
          <View key={index}>
            <Html>{item}</Html>
          </View>
        ))}
      </Page>
    </Document>
  );
}

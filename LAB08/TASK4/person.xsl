<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Osoby</title>
                <style>
                    * {
                        margin: 10px;
                    }
                    .person {
                        display: flex;
                        flex-direction: column;
                        color: white;
                        background-color: black;
                    }
                    .address {
                        border: 1px solid white;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid white;
                        padding: 5px;
                        text-align: left;
                    }
                </style>
            </head>
            <body>
                <h2>Osoby</h2>
                <table>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Adresy</th>
                    </tr>
                    <xsl:for-each select="persons/person">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="surname"/></td>
                            <td>
                                <xsl:for-each select="address">
                                    <div>
                                        <xsl:value-of select="city"/>, <xsl:value-of select="street"/>
                                    </div>
                                </xsl:for-each>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

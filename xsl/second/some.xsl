<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <xsl:variable name="width" select="root/графика/@ширина" />
                <xsl:variable name="height" select="root/графика/@высота" />
                <svg style="width: {$width}px; height: {$height}px">
                    <xsl:for-each select="root/графика/эллипс">
                        <xsl:variable name="rx" select="@rx" />
                        <xsl:variable name="ry" select="@ry" />
                        <xsl:variable name="cx" select="@cx" />
                        <xsl:variable name="cy" select="@cy" />
                        <xsl:variable name="border" select="@ширина-ободка" />
                        <xsl:variable name="background" select="@заливка" />
                        <xsl:variable name="color" select="@ободок" />
                        <xsl:variable name="id" select="@id" />                        
                        
                        <circle
                            id="{$id}"
                            r="65"
                            cx="{$cx}" cy="{$cy}"
                            rx="{$rx}" ry="{$ry}"
                            fill="{$background}" stroke="{$color}" stroke-width="{$border}" />                        
                    </xsl:for-each>
                </svg>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
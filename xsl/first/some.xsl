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
                <xsl:for-each select="строка">
                    $$<xsl:value-of select="операнд" />
                    <xsl:value-of select="оператор" /> {
                    <xsl:for-each select="корень">
                        \sqrt {
                        <xsl:for-each select="строка">
                            <xsl:for-each select="дробь"> <!-- начало 1/N-->
                               \left ( <xsl:value-of select="строка/число" /> \over <xsl:value-of select="строка/операнд" /> \right)
                            </xsl:for-each> <!-- конец 1/N -->                           
                            <xsl:for-each select="строка">
                                <xsl:for-each select="низверх">
                                    <xsl:variable name="sum" select="строка[1]/оператор" /> <!-- начало суммы -->
                                    <xsl:if test="$sum='∑'"> 
                                        \sum_{
                                        <xsl:value-of select="строка[2]/операнд" />
                                        <xsl:value-of select="строка[2]/оператор" />
                                        <xsl:value-of select="строка[2]/число" />}^
                                        <xsl:value-of select="строка[3]/операнд" />
                                    </xsl:if> <!-- конец суммы -->
                                    \left                                    
                                </xsl:for-each>
                                <xsl:for-each select="строка/верх"> <!-- начало выражения внутри суммы -->
                                    <xsl:value-of select="строка[1]/оператор[1]" />
                                    <xsl:value-of select="строка[1]/низ/строка[1]/операнд[1]" />_
                                    <xsl:value-of select="строка[1]/низ/строка[2]/операнд[1]" />
                                    <xsl:value-of select="строка[1]/оператор[2]" />
                                    <xsl:value-of select="строка[1]/операнд" /> \right
                                    <xsl:value-of select="строка[1]/оператор[3]" /> ^
                                    <xsl:value-of select="строка[2]/число" />
                                </xsl:for-each> <!-- конец выражения внутри суммы -->
                            </xsl:for-each>
                        </xsl:for-each> }
                    </xsl:for-each> }
                </xsl:for-each>
                <xsl:value-of select="строка/оператор[2]" />
                $$
                <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
                <script id="MathJax-script" async="true" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
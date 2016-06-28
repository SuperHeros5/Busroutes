<%--
$Id$
Copyright (c) 2011 Rogers. 
All Rights Reserved.
Description: This jsp displays the information equivalent to that shown in order fragment of wireless maintenance flow.

Jean Pierre Mbungira
2013/01/06
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="dsp"
    uri="http://www.atg.com/taglibs/daf/dspjspTaglib1_0"%>
<%@ taglib prefix="tag" tagdir="/WEB-INF/tags"%>

<dsp:page>

     <dsp:getvalueof var="isPrepaid" param="isPrepaid"/>
     <dsp:getvalueof var="changeTelephoneNumberFee" param="changeTelephoneNumberFee"/>
     <dsp:getvalueof var="isConfirmation" param="isConfirmation"/>
     <dsp:getvalueof var="ctnTO" param="ctnTO"/>
    

    <tag:userAccess authenticated="true" permission="granted"
        userType="rogersUser" accessRight="cfa-right">
        <c:set var="isCfaUser" value="true" />
    </tag:userAccess>

    <div class="marginTop10">
    <table class="marginTop5 searchResults full aquaborderbottom aquaborderrightleft">
        <dsp:include page="change_telephone_number_order_assembly_wireless.jsp">
            <dsp:param name="isCfaUser" value="${isCfaUser}" />
            <dsp:param name="showPrice" value="true" />
            <dsp:param name="wireless" value="true" />
            <dsp:param name="allowEdit" value="${allowEdit}" />
            <dsp:param name="showHeader" value="true" />
            <dsp:param name="idPrepaid" value="${isPrepaid}"/>
            <dsp:param name="isConfirmation" value="${isConfirmation}"/>
            <dsp:param name="ctnTO" value="${ctnTO}"/>
        </dsp:include>
    </table>
    
    
</dsp:page>
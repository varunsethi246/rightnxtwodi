import { moment } from "meteor/momentjs:moment";
import { Orders } from '../../../../api/orderMaster.js';

import './yearlySalesReport.html';


Template.yearlySalesReport.helpers({

	'currentyear' : function(){
		var yearSession = Session.get('selectedYear');
		if(yearSession){
			var currentYear = yearSession;
		}else{
			var today = new Date();
	    var currentYear = today.getFullYear();
			Session.set("selectedYear",currentYear);
		}

		return currentYear;

	},

  'result' : function(){
    var yearFromSess = Session.get("selectedYear");

    var thisYear = yearFromSess;
    var yearDateStart = new Date("1/1/" + thisYear);
    var yearDateEnd = new Date (yearDateStart.getFullYear(), 11, 31);
    var ordersData = Orders.find({'createdAt':{$gte: yearDateStart,$lt: yearDateEnd}}).fetch();
    var totalRec = ordersData.length;
      if(ordersData){
        var allOrders = [];
        var dateCount = 0;
        var tempdate = '1/1/1';

        for(i=0; i < totalRec; i++){
          var quantityTotal = 0;
          var d = ordersData[i].createdAt;
          var t = d.toLocaleDateString('en-IN');
          if (t == tempdate) {
              dateCount++;
          }

            allOrders[i] = {
              "orderId"       : ordersData[i]._id ,
              "totalAmount"   : formatRupees(ordersData[i].totalAmount) ,
              "proCount"      : ordersData[i].products.length,
              "date"          : t ,
              "orderNo"       : ordersData[i].OrderId,
              "transaction"   : ordersData[i].paymentMethod,
              "totalQuantity" : 0,
              "rowSpanCount"  : 0,
            }

          var totalProdQty = ordersData[i].products.length;
          for(j=0 ; j<totalProdQty; j++){
            quantityTotal += parseInt(ordersData[i].products[j].quantity);

          }

          allOrders[i].totalQuantity = parseInt(quantityTotal);
            if(t != tempdate){
              var rowSpan = dateCount;
              allOrders[i-rowSpan].rowSpanCount = rowSpan;
              tempdate = t;
              dateCount = 1;
            }

        }//for Loop
        var rowSpan = dateCount;
        allOrders[i-rowSpan].rowSpanCount = rowSpan;
        return allOrders;
      } //if

  }


});


Template.yearlySalesReport.events({

	'click #nextYear':function(event){
		event.preventDefault();
		var selectedYear = $("input#yearlyValue").val();
		var newYear = moment(selectedYear).add(1,'years').format('YYYY');
		Session.set('selectedYear', newYear);

	},

	'click #previousYear':function(event){
		event.preventDefault();
		var selectedYear = $("input#yearlyValue").val();
		var newYear = moment(selectedYear).subtract(1,'years').format('YYYY');
		Session.set('selectedYear', newYear);

	}


});

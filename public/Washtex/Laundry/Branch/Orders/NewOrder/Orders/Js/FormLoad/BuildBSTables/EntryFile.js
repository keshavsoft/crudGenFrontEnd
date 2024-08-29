import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
import AttributesJson from './Attributes.json' with {type: 'json'};

const StartFunc = () => {
    jFLocalToTableTag();
    jFPrepareColumns();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        detailView: true,
        onExpandRow: StartFuncOnExpandRow,
        icons: IconsJson
    });

}

const jFLocalToTableTag = () => {
    var $table = $('#table');

    $table.attr(AttributesJson.tableAttributes);
};

const jFPrepareColumns = () => {
    jFPrepareOrder();
    jFPrepareCustomer();
    jFPrepareMobile();
    jFPrepareDate();
    jFPrepareItems();
};

const jFPrepareOrder = () => {
    var $customer = $('#OrderId');

    $customer.attr(AttributesJson.coloumnAttributes.orderAttributes);
};

const jFPrepareCustomer = () => {
    var $customer = $('#CustomerId');

    $customer.attr(AttributesJson.coloumnAttributes.customerAttributes);
};

const jFPrepareMobile = () => {
    var $mobile = $('#MobileId');

    $mobile.attr(AttributesJson.coloumnAttributes.mobileAttributes);
};

const jFPrepareDate = () => {
    var $mobile = $('#DateId');

    $mobile.attr(AttributesJson.coloumnAttributes.dateAttributes);
};

const jFPrepareItems = () => {
    var $mobile = $('#ItemsId');

    $mobile.attr(AttributesJson.coloumnAttributes.ItemsAttributes);
};

export { StartFunc };

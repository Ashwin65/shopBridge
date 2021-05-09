import {
    createItem, 
    responeCreateItem,
    fetchItem,
    responseFetchItem,
    deleteItem,
    responseDeleteItem,
    editItem,
    responseEditItem
} from "../ItemActions";


describe("Test for Account Actions", () => {
    it("Test For the Action - add item", () => {
      const expectedAction = {
        type: "STORE_ITEM",
        payload: "test_data"
      };
  
      expect(createItem("test_data")).toEqual(expectedAction);
    });
    it("Test For the Action - response add item", () => {
      const expectedAction = {
        type: "ADD_ITEM",
      };
  
      expect(responeCreateItem()).toEqual(expectedAction);
    });
    it("Test For the Action - fetch items", () => {
      const expectedAction = {
        type: "GET_ITEM",
      };
  
      expect(fetchItem()).toEqual(expectedAction);
    });
  
    it("Test for the Action - reponse fetch item", () => {
      const expectedAction = {
        type: "FETCH_ITEM",
      };
      expect(responseFetchItem()).toEqual(expectedAction);
    });
    it("Test for the Action - delete item", () => {
      const expectedAction = {
        type: "DELETE_ITEM",
        payload: "test"
      };
      expect(deleteItem("test")).toEqual(expectedAction);
    });
    it("Test for the Action - response delete item", () => {
      const expectedAction = {
        type: "REMOVE_ITEM",
        payload: "Test_Data",
      };
      expect(responseDeleteItem("Test_Data")).toEqual(expectedAction);
    });
    it("Test for the Action - edit item", () => {
        const expectedAction = {
          type: "EDIT_ITEM",
          payload: "test"
        };
        expect(editItem("test")).toEqual(expectedAction);
      });
      it("Test for the Action - response edit item", () => {
        const expectedAction = {
          type: "REPLACE_ITEM",
          payload: "Test_Data",
        };
        expect(responseEditItem("Test_Data")).toEqual(expectedAction);
      });
  });
import { cleanup, sandbox, waitEvent } from "./utils/utils";
import InfiniteGrid from "../../src/InfiniteGrid";
import { SampleGrid } from "./samples/SampleGrid";
import { toArray } from "../../src/utils";
import {
  InfiniteGridOptions,
  OnRenderComplete,
  OnRequestAppend,
  OnRequestPrepend,
  OnContentError,
  OnScroll,
  STATUS_TYPE,
} from "../../src";

describe("test InfiniteGrid", () => {
  let ig: InfiniteGrid | null;
  let container: HTMLElement | null;
  beforeEach(() => {
    container = sandbox("")!;
    container!.style.cssText = "";
  });

  afterEach(() => {
    if (ig) {
      ig!.destroy();
    }
    ig = null;
    container = null;
    cleanup();
  });
  describe("Initialzation", () => {
    it("should check if container elements are the same", () => {
      // Given
      container!.innerHTML = `
      <div class="wrapper" style="width: 100%; height: 500px;">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      `;
      const wrapper = container!.querySelector<HTMLElement>(".wrapper")!;
      ig = new InfiniteGrid<InfiniteGridOptions>(wrapper, {
        gridConstructor: SampleGrid,
        container: true,
      });

      // When, Then
      expect(ig!.getWrapperElement()).to.be.equals(wrapper);
      expect(ig!.getScrollContainerElement()).to.be.equals(wrapper);
      expect(ig!.getItems().length).to.be.equals(0);
    });
  });
  describe("test rendering", () => {
    beforeEach(() => {
      // Given
      container!.innerHTML = `
      <div class="wrapper" style="width: 100%; height: 500px;">
      </div>
      `;
      const wrapper = container!.querySelector<HTMLElement>(".wrapper")!;
      ig = new InfiniteGrid<InfiniteGridOptions>(wrapper, {
        gridConstructor: SampleGrid,
        container: true,
      });
    });
    it("should check to render children when items are not present", async () => {
      // Given
      const igContainer = ig!.getContainerElement();

      igContainer.innerHTML = `<div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>`;
      const children = toArray(igContainer.children);

      // When
      ig!.renderItems();

      await waitEvent(ig!, "renderComplete");


      const firstItem = ig!.getItems()[0];

      // Then
      ig!.getItems().forEach((item) => {
        expect(item.groupKey).to.be.equals(firstItem.groupKey);
      });
      ig!.getGroups().forEach((group) => {
        expect(group.groupKey).to.be.equals(firstItem.groupKey);
      });
      ig!.getVisibleGroups().forEach((group) => {
        expect(group.groupKey).to.be.equals(firstItem.groupKey);
      });
      children.forEach((child, i) => {
        expect(child.style.top).to.be.equals(`${i * 18}px`);
      });
    });
    it("should check if items are rendered", async () => {
      // Given
      const igContainer = ig!.getContainerElement();

      ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
        return {
          groupKey: Math.floor(child / 3),
          key: child,
          html: `<div>${child}</div>`,
        };
      }));
      // When
      ig!.setCursors(0, 1);

      const e = await waitEvent<OnRenderComplete>(ig!, "renderComplete");
      const children = toArray(igContainer.children);

      // Then
      expect(e.startCursor).to.be.equals(0);
      expect(e.endCursor).to.be.equals(1);
      expect(ig!.getItems().map((item) => item.groupKey)).to.be.deep.equals([0, 0, 0, 1, 1, 1]);
      expect(ig!.getGroups().map((group) => group.groupKey)).to.be.deep.equals([0, 1]);
      expect(ig!.getVisibleGroups().map((group) => group.groupKey)).to.be.deep.equals([0, 1]);
      expect(children.length).to.be.equals(6);

      children.forEach((child, i) => {
        expect(child.style.top).to.be.equals(`${i * 18}px`);
      });
    });
    it("should check if only visible items are rendered", async () => {
      // Given
      const igContainer = ig!.getContainerElement();

      ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
        return {
          groupKey: Math.floor(child / 3),
          key: child,
          html: `<div style="height: 250px">${child}</div>`,
        };
      }));

      ig!.setCursors(0, 1);

      // When
      await waitEvent<OnRenderComplete>(ig!, "renderComplete");

      // one more [0, 1] => [0]
      const e = await waitEvent<OnRenderComplete>(ig!, "renderComplete");
      const children = toArray(igContainer.children);

      // Then
      expect(e.startCursor).to.be.equals(0);
      expect(e.endCursor).to.be.equals(0);
      expect(e.items).to.be.deep.equals(ig!.getVisibleItems());
      expect(e.groups).to.be.deep.equals(ig!.getVisibleGroups());
      expect(ig!.getVisibleGroups().map((group) => group.groupKey)).to.be.deep.equals([0]);
      expect(children.length).to.be.equals(3);

      children.forEach((child, i) => {
        expect(child.style.top).to.be.equals(`${i * 250}px`);
      });
    });
    it("should check whether it is rendered after changing options", async () => {
      // Given
      const igContainer = ig!.getContainerElement();

      ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
        return {
          groupKey: Math.floor(child / 3),
          key: child,
          html: `<div>${child}</div>`,
        };
      }));

      ig!.setCursors(0, 1);

      await waitEvent(ig!, "renderComplete");


      // When
      // 0 => 5
      ig!.gap = 5;
      ig!.renderItems();

      await waitEvent(ig!, "renderComplete");

      // Then
      const children = toArray(igContainer.children);

      children.forEach((child, i) => {
        expect(child.style.top).to.be.equals(`${i * 23}px`);
      });
    });
    it("should check whether it is rendered after changing options", async () => {
      // Given
      const igContainer = ig!.getContainerElement();

      ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
        return {
          groupKey: Math.floor(child / 3),
          key: child,
          html: `<div>${child}</div>`,
        };
      }));

      ig!.setCursors(0, 1);

      await waitEvent(ig!, "renderComplete");

      // When
      // 0 => 5
      ig!.gap = 5;
      ig!.renderItems();

      await waitEvent(ig!, "renderComplete");

      // Then
      const children = toArray(igContainer.children);

      children.forEach((child, i) => {
        expect(child.style.top).to.be.equals(`${i * 23}px`);
      });
    });
    it("should check if render is complete after append", async () => {
      // Given
      const igContainer = ig!.getContainerElement();

      ig!.append([0, 1, 2, 3, 4, 5].map((child) => {
        return {
          groupKey: Math.floor(child / 3),
          key: child,
          html: `<div style="height: 250px">${child}</div>`,
        };
      }));

      await waitEvent(ig!, "renderComplete");

      // Then
      const children = toArray(igContainer.children);
      expect(ig!.getItems().map((item) => item.groupKey)).to.be.deep.equals([0, 0, 0, 1, 1, 1]);
      expect(ig!.getGroups().map((group) => group.groupKey)).to.be.deep.equals([0, 1]);
      expect(ig!.getVisibleGroups().map((group) => group.groupKey)).to.be.deep.equals([0]);
      expect(children.length).to.be.equals(3);

      children.forEach((child, i) => {
        expect(child.style.top).to.be.equals(`${i * 250}px`);
      });
    });
    it("should check if the scroll position changes when prepend", async () => {
      // Given
      const igContainer = ig!.getContainerElement();

      ig!.append([0, 1, 2, 3, 4].map((child) => {
        return {
          groupKey: Math.floor(child / 5),
          key: child,
          html: `<div style="height: 200px;">${child}</div>`,
        };
      }));

      await waitEvent(ig!, "renderComplete");


      ig!.prepend([5, 6, 7, 8, 9].map((child) => {
        return {
          groupKey: Math.floor(child / 5),
          key: child,
          html: `<div style="height: 200px;">${child}</div>`,
        };
      }));

      await waitEvent(ig!, "renderComplete");

      // Then
      const children = toArray(igContainer.children);

      expect(ig!.getItems().map((item) => item.groupKey)).to.be.deep.equals([1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
      expect(ig!.getGroups().map((group) => group.groupKey)).to.be.deep.equals([1, 0]);
      expect(ig!.getVisibleGroups().map((group) => group.groupKey)).to.be.deep.equals([1, 0]);
      expect(ig!.getScrollContainerElement().scrollTop).to.be.equals(1000);
      expect(children.length).to.be.equals(10);

      children.forEach((child, i) => {
        expect(child.style.top).to.be.equals(`${i * 200}px`);
      });
    });
    describe("test contentError event", () => {
      it("should check if contentError event occurs with error image", async () => {
        // Given
        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: 0,
            key: `key${child}`,
            html: `<div style="height: 150px">${child === 2 ? `<img src="ERR" />` : ""}</div>`,
          };
        }));
        ig!.renderItems();

        // When
        const e = await waitEvent<OnContentError>(ig!, "contentError");


        // Then
        expect(e.item.key).to.be.equals("key2");
      });
      it("should check if it is recalculated if removed", async () => {
        // Given
        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: 0,
            key: `key${child}`,
            html: `<div style="height: 150px">${child === 2 ? `<img src="ERR" />` : ""}</div>`,
          };
        }));
        ig!.renderItems();

        // When
        const e = await waitEvent<OnContentError>(ig!, "contentError");

        e.remove();

        await waitEvent<OnRenderComplete>(ig!, "renderComplete");

        // Then
        const children = toArray(ig!.getContainerElement().children);

        expect(ig!.getItems().length).to.be.equals(5);
        expect(children.length).to.be.equals(5);

        children.forEach((child, i) => {
          expect(child.style.top).to.be.equals(`${i * 150}px`);
        });
      });
    });
    describe("test scroll event", () => {
      it("should check if scroll event occurs when scrolling", async () => {
        // Given
        const igScrollContainer = ig!.getScrollContainerElement();
        const igContainer = ig!.getContainerElement();

        igContainer.style.marginTop = "10px";
        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 150px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 1);
        ig!.renderItems();

        await waitEvent(ig!, "renderComplete");


        // When
        // start to end
        igScrollContainer.scrollTop = 200;

        const e1 = await waitEvent<OnScroll>(ig!, "scroll");

        igScrollContainer.scrollTop = 0;

        // end to start
        const e2 = await waitEvent<OnScroll>(ig!, "scroll");

        // Then
        expect(e1.direction).to.be.equals("end");
        expect(e1.scrollPos).to.be.equals(200);
        expect(e1.relativeScrollPos).to.be.equals(190);

        expect(e2.direction).to.be.equals("start");
        expect(e2.scrollPos).to.be.equals(0);
        expect(e2.relativeScrollPos).to.be.equals(-10);
      });
      it("should check if the requestAppend event occurs when scrolling to the end", async () => {
        // Given
        const igScrollContainer = ig!.getScrollContainerElement();
        const igContainer = ig!.getContainerElement();

        igContainer.style.marginTop = "10px";
        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 150px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 1);
        ig!.renderItems();

        await waitEvent(ig!, "renderComplete");


        // When
        // scroll to end
        igScrollContainer.scrollTop = 800;

        const e1 = await waitEvent<OnRequestAppend>(ig!, "requestAppend");

        // Then
        expect(e1.groupKey).to.be.equals(1);
      });
      it("should check if the requestPrepend event occurs when scrolling to the start", async () => {
        // Given
        const igScrollContainer = ig!.getScrollContainerElement();
        const igContainer = ig!.getContainerElement();

        igContainer.style.marginTop = "10px";
        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 150px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 1);
        ig!.renderItems();

        await waitEvent(ig!, "renderComplete");

        // scroll to end
        igScrollContainer.scrollTop = 800;

        await waitEvent<OnRequestAppend>(ig!, "requestAppend");

        // When
        // end to start
        igScrollContainer.scrollTop = 0;

        const e = await waitEvent<OnRequestPrepend>(ig!, "requestPrepend");

        // Then
        expect(e.groupKey).to.be.equals(0);
      });
    });
    describe("test remove methods", () => {
      it("should checks whether the item is removed when the removeByKey method is called", async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 1);
        await waitEvent(ig!, "renderComplete");

        // When
        // 0 1 3 4 5
        ig!.removeByKey("key2");
        await waitEvent(ig!, "renderComplete");

        // Then
        const children = toArray(igContainer.children);

        expect(ig!.getItems().map((item) => item.key)).to.be.deep.equals([0, 1, 3, 4, 5].map((key) => `key${key}`));
        expect(igContainer.children.length).to.be.equals(5);

        children.forEach((child, i) => {
          expect(child.style.top).to.be.equals(`${i * 100}px`);
        });
      });
      it("should checks whether the item is removed when the removeByIndex method is called", async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 1);
        await waitEvent(ig!, "renderComplete");

        // When
        // 0 1 3 4 5
        ig!.removeByIndex(2);
        await waitEvent(ig!, "renderComplete");

        // Then
        const children = toArray(igContainer.children);

        expect(ig!.getItems().map((item) => item.key)).to.be.deep.equals([0, 1, 3, 4, 5].map((key) => `key${key}`));
        expect(igContainer.children.length).to.be.equals(5);

        children.forEach((child, i) => {
          expect(child.style.top).to.be.equals(`${i * 100}px`);
        });
      });
      it("should checks whether the item is removed when the removeGroupByKey method is called", async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 1);
        await waitEvent(ig!, "renderComplete");

        // When
        // 3 4 5
        ig!.removeGroupByKey(0);
        await waitEvent(ig!, "renderComplete");

        // Then
        const children = toArray(igContainer.children);

        expect(ig!.getItems().map((item) => item.key)).to.be.deep.equals([3, 4, 5].map((key) => `key${key}`));
        expect(igContainer.children.length).to.be.equals(3);

        children.forEach((child, i) => {
          expect(child.style.top).to.be.equals(`${i * 100}px`);
        });
      });
      it("should checks whether the item is removed when the removeGroupByIndex method is called", async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 1);
        await waitEvent(ig!, "renderComplete");

        // When
        // 3 4 5
        ig!.removeGroupByIndex(0);
        await waitEvent(ig!, "renderComplete");

        // Then
        const children = toArray(igContainer.children);

        expect(ig!.getItems().map((item) => item.key)).to.be.deep.equals([3, 4, 5].map((key) => `key${key}`));
        expect(igContainer.children.length).to.be.equals(3);

        children.forEach((child, i) => {
          expect(child.style.top).to.be.equals(`${i * 100}px`);
        });
      });
    });
    describe("test getStatus, setStatus", () => {
      it("should check if recovery is possible When you get the full status and setStatus", async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");
        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");

        // When
        const children = [].slice.call(igContainer.children);
        const html = igContainer.outerHTML;

        ig!.setStatus(ig!.getStatus());
        await waitEvent(ig!, "renderComplete");

        // Then
        const children2 = [].slice.call(igContainer.children);
        const html2 = igContainer.outerHTML;

        expect(html2).to.be.equals(html);
        expect(ig!.getItems().length).to.be.equals(15);
        expect(ig!.getVisibleItems().length).to.be.equals(9);
        expect(ig!.getGroups().length).to.be.equals(5);
        expect(ig!.getVisibleGroups().length).to.be.equals(3);
        children2.forEach((el, i) => {
          expect(el).to.be.not.equal(children[i]);
        });
      });
      it("should check if recovery is possible When you get the partial status and setStatus", async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");
        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");

        // When
        const children = [].slice.call(igContainer.children);
        const html = igContainer.outerHTML;

        ig!.setStatus(ig!.getStatus(STATUS_TYPE.REMOVE_INVISIBLE_GROUPS));
        await waitEvent(ig!, "renderComplete");

        const children2 = [].slice.call(igContainer.children);
        const html2 = igContainer.outerHTML;

        ig!.renderItems();
        await waitEvent(ig!, "renderComplete");

        // update outlines
        const children3 = [].slice.call(igContainer.children);
        const html3 = igContainer.outerHTML;

        // Then
        expect(ig!.getItems().length).to.be.equals(9);
        expect(ig!.getVisibleItems().length).to.be.equals(9);
        expect(ig!.getGroups().length).to.be.equals(3);
        expect(ig!.getVisibleGroups().length).to.be.equals(3);

        expect(html2).to.be.equals(html);
        children2.forEach((el, i) => {
          expect(el).to.be.not.equal(children[i]);
        });
        expect(html3).to.be.not.equals(html);
        children3.forEach((el, i) => {
          expect(el).to.be.not.equal(children[i]);
        });
      });
      it(`should check if recovery is possible When you get the partial status with minimized invisible items and setStatus`, async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");
        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");

        // When
        const children = [].slice.call(igContainer.children);
        const html = igContainer.outerHTML;

        ig!.setStatus(ig!.getStatus(STATUS_TYPE.MINIMIZE_INVISIBLE_ITEMS));
        await waitEvent(ig!, "renderComplete");

        const children2 = [].slice.call(igContainer.children);
        const html2 = igContainer.outerHTML;

        ig!.renderItems();
        await waitEvent(ig!, "renderComplete");

        // update outlines
        const children3 = [].slice.call(igContainer.children);
        const html3 = igContainer.outerHTML;

        // Then
        // items (9) virtual items (6)
        expect(ig!.getItems(true).length).to.be.equals(15);
        expect(ig!.getItems().length).to.be.equals(9);
        expect(ig!.getVisibleItems().length).to.be.equals(9);
        // groups (3) virtual groups (2)
        expect(ig!.getGroups(true).length).to.be.equals(5);
        expect(ig!.getGroups().length).to.be.equals(3);
        expect(ig!.getVisibleGroups().length).to.be.equals(3);

        expect(html2).to.be.equals(html);
        children2.forEach((el, i) => {
          expect(el).to.be.not.equal(children[i]);
        });
        expect(html3).to.be.equals(html);
        children3.forEach((el, i) => {
          expect(el).to.be.not.equal(children[i]);
        });
      });
      it(`should check if recovery is possible When you get the partial status with minimized invisible groups and setStatus`, async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");
        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");

        // When
        const children = [].slice.call(igContainer.children);
        const html = igContainer.outerHTML;

        ig!.setStatus(ig!.getStatus(STATUS_TYPE.MINIMIZE_INVISIBLE_GROUPS));
        await waitEvent(ig!, "renderComplete");

        const children2 = [].slice.call(igContainer.children);
        const html2 = igContainer.outerHTML;

        ig!.renderItems();
        await waitEvent(ig!, "renderComplete");

        // update outlines
        const children3 = [].slice.call(igContainer.children);
        const html3 = igContainer.outerHTML;

        // Then
        expect(ig!.getItems(true).length).to.be.equals(9);
        expect(ig!.getItems().length).to.be.equals(9);
        expect(ig!.getVisibleItems().length).to.be.equals(9);
        // groups (3) virtual groups (2)
        expect(ig!.getGroups(true).length).to.be.equals(5);
        expect(ig!.getGroups().length).to.be.equals(3);
        expect(ig!.getVisibleGroups().length).to.be.equals(3);

        expect(html2).to.be.equals(html);
        children2.forEach((el, i) => {
          expect(el).to.be.not.equal(children[i]);
        });
        expect(html3).to.be.equals(html);
        children3.forEach((el, i) => {
          expect(el).to.be.not.equal(children[i]);
        });
      });
      it(`should check if requestAppend event for invisible items is triggered`, async () => {
        // Given
        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");
        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");

        // When
        ig!.setStatus(ig!.getStatus(STATUS_TYPE.MINIMIZE_INVISIBLE_ITEMS));
        await waitEvent(ig!, "renderComplete");

        ig!.getScrollContainerElement().scrollTop = 500;

        const e = await waitEvent<OnRequestAppend>(ig!, "requestAppend");

        // Then
        expect(ig!.getStartCursor()).to.be.equals(1);
        expect(ig!.getEndCursor()).to.be.equals(3);
        expect(e.groupKey).to.be.equals(2);
        expect(e.nextGroupKey).to.be.equals(3);
      });
      it(`should check if requestAppend event for invisible groups is triggered`, async () => {
        // Given
        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");
        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");

        // When
        ig!.setStatus(ig!.getStatus(STATUS_TYPE.MINIMIZE_INVISIBLE_GROUPS));
        await waitEvent(ig!, "renderComplete");

        ig!.getScrollContainerElement().scrollTop = 500;

        const e = await waitEvent<OnRequestAppend>(ig!, "requestAppend");

        // Then
        expect(ig!.getStartCursor()).to.be.equals(1);
        expect(ig!.getEndCursor()).to.be.equals(3);
        expect(e.groupKey).to.be.equals(2);
        expect(e.nextGroupKey).to.be.equals(3);
      });
      it(`should check if recovery is possible with placeholders When you get the partial status with minimized invisible items and setStatus`, async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");
        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");


        // set place holder
        ig!.setPlaceholder({
          html: `<div class="placeholder"></div>`,
        });
        ig!.setStatus(ig!.getStatus(STATUS_TYPE.MINIMIZE_INVISIBLE_ITEMS));
        await waitEvent(ig!, "renderComplete");

        // When
        ig!.getScrollContainerElement().scrollTop = 500;
        await waitEvent(ig!, "renderComplete");

        // Then
        expect(ig!.getStartCursor()).to.be.equals(1);
        expect(ig!.getEndCursor()).to.be.equals(3);
        // items (6) virtual items (3)
        expect(ig!.getVisibleItems(true).length).to.be.equals(9);
        expect(ig!.getVisibleItems().length).to.be.equals(6);

        const children = [].slice.call(igContainer.children) as HTMLElement[];

        children.slice(0, 6).forEach((el) => {
          expect(el.classList.contains("placeholder")).to.be.false;
        });
        children.slice(6, 9).forEach((el) => {
          expect(el.classList.contains("placeholder")).to.be.true;
        });
      });
      it(`should check that the call requestAppend and replace the placeholder`, async () => {
        // Given
        const igContainer = ig!.getContainerElement();

        ig!.syncItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((child) => {
          return {
            groupKey: Math.floor(child / 3),
            key: `key${child}`,
            html: `<div style="height: 100px">${child}</div>`,
          };
        }));

        ig!.setCursors(0, 4);
        // all cursors
        await waitEvent(ig!, "renderComplete");


        // partial cursors (0 ~ 2)
        await waitEvent(ig!, "renderComplete");

        // set place holder
        ig!.setPlaceholder({
          html: `<div class="placeholder"></div>`,
        });
        ig!.setStatus(ig!.getStatus(STATUS_TYPE.MINIMIZE_INVISIBLE_ITEMS));

        await waitEvent(ig!, "renderComplete");

        ig!.on("requestAppend", ({ nextGroupKey }) => {
          if (nextGroupKey) {
            const groupKey = nextGroupKey as number;

            ig!.append([0, 1, 2].map((child) => ({
              groupKey,
              key: `key${groupKey * 3 + child}`,
              html: `<div style="height: 100px">${groupKey * 3 + child}</div>`,
            })));
          }
        });

        // When
        ig!.getScrollContainerElement().scrollTop = 500;

        await waitEvent(ig!, "requestAppend");
        await waitEvent(ig!, "renderComplete");


        // Then
        expect(ig!.getStartCursor()).to.be.equals(1);
        expect(ig!.getEndCursor()).to.be.equals(3);
        // items (12) virtual items (3)
        expect(ig!.getItems(true).length).to.be.equals(15);
        expect(ig!.getItems().length).to.be.equals(12);
        // items (9) virtual items (0)
        expect(ig!.getVisibleItems(true).length).to.be.equals(9);
        expect(ig!.getVisibleItems().length).to.be.equals(9);

        const children = [].slice.call(igContainer.children) as HTMLElement[];

        children.forEach((el) => {
          expect(el.classList.contains("placeholder")).to.be.false;
        });
      });
    });
  });
});

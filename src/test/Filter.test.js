import { capitalize, setGender, setName, setSpecies, setStatus, resetFilters, createFilterUrl } from '../components/Filter.jsx';
import renderFilter from '../components/Filter.jsx';
import { render } from "@testing-library/react";

describe("capitalize", () => {
  it("should return uppercase first letter", () => {    
    expect(capitalize("mahmut")).toBe("Mahmut");
  })
});

describe("set filter item tags", () => {
    let filters;
    const setFilters = (newFilters) => {filters = newFilters;}
    beforeEach(() => {
        filters = {
            name: "default",
            gender: "default",
            status: "default",
            species: "default"
        }
    });
    it("should override gender attribute of filter object", () => {
        setName("maamut", filters, setFilters );
        expect(filters).toStrictEqual({ 
            name: "maamut",
            gender: "default",
            status: "default",
            species: "default"
        });
    });
    it("should override gender attribute of filter object", () => {
        setGender("female", filters, setFilters );
        expect(filters).toStrictEqual({ 
            name: "default",
            gender: "female",
            status: "default",
            species: "default"
        });
    });
    it("should override status attribute of filter object", () => {
        setStatus("alive", filters, setFilters );
        expect(filters).toStrictEqual({ 
            name: "default",
            gender: "default",
            status: "alive",
            species: "default"
        });
    });
    it("should override species attribute of filter object", () => {
        setSpecies("human", filters, setFilters );
        expect(filters).toStrictEqual({ 
            name: "default",
            gender: "default",
            status: "default",
            species: "human"
        });
    });
    it("should set all attributes of filter object accordingly", () => {
        setName("maamut", filters, setFilters );
        setGender("female", filters, setFilters );
        setStatus("alive", filters, setFilters );
        setSpecies("human", filters, setFilters );
        expect(filters).toStrictEqual({ 
            name: "maamut",
            gender: "female",
            status: "alive",
            species: "human"
        });
    });
    it("should remove all filters and set api url to default", () => {
        let apiUrl = "";
        resetFilters(setFilters, (newApiUrl) =>{apiUrl = newApiUrl});
        expect(filters).toStrictEqual({});
        expect(apiUrl).toBe("https://rickandmortyapi.com/api/character");
    })
});

describe("create filter url", () => {
    it("should create api url from filter object", () => {
        const expectedUrl = "https://rickandmortyapi.com/api/character/?name=maamut&gender=female&status=alive&species=human"
        const filters = {
            name: "maamut",
            gender: "female",
            status: "alive",
            species: "human"
        }
        expect(createFilterUrl(filters)).toBe(expectedUrl);
    })
});

describe("", () => {
    it("should return html tags", () => {
        const { filter } = render (<Filter/>);
        expect(filter()).toBeTruthy();
    })
})


import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import { VISIBILITY_FILTER } from "../util";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

export const VisibilityFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (currentFilter: any) => [
    dispatch(setFilter(currentFilter)),
  ];

  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(VISIBILITY_FILTER).map((filterKey) => {
            const currentFilter = VISIBILITY_FILTER[filterKey];
            return (
              <Tab
                onClick={() => handleFilterChange(currentFilter)}
                key={`visibility-filter-${currentFilter}`}
              >
                {" "}
                {currentFilter}{" "}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};

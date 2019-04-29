import { connect } from "react-redux";
import BooleanSpan from '../../components/booleanSpan';
import MetronomeSelectorFactory from '../../selectors/metronomeSection';

export const ConnectedMetronomeSections = (() => {
  const sections = [];

  for (let i = 0; i < 4; i++) {
    const selector = MetronomeSelectorFactory(i);

    const mapStateToProps = state => ({
      active: selector(state)
    });

    const mapDispatchToProps = dispatch => ({
    });

    sections.push(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(BooleanSpan)
    );
  }

  return sections;
})();
import Wrapper from "@/components/atoms/Wrapper";
import styles from "./EvaluationProcess.module.scss";

const EvaluationProcess = () => {
    return (
        <section className={styles.evaluationProcess}>
            <Wrapper>
                <div className={styles.evaluationProcess__inner}>
                    <h4 className={styles.evaluationProcess__title}>
                        Evaluation Process
                    </h4>
                    <p className={styles.evaluationProcess__text}>
                        Each startup undergoes a thorough evaluation to ensure the best fit
                        for our equity services. We’ll work with you to develop a specific
                        offer that balances equity and hourly rates.
                    </p>
                </div>
            </Wrapper>
        </section>
    );
};

export default EvaluationProcess;

FROM airhacks/ubuntu_java8:latest
LABEL maintainer="oliver.michels@kps.com" description="hybris"
COPY bundles/commerce-suite-6.6.0.2.zip /tmp/hybris-commerce-suite.zip
RUN \
  apt-get update && apt-get -y --no-install-recommends install \
    curl unzip lsof

RUN unzip /tmp/hybris-commerce-suite.zip -d /opt/ \
  && rm /tmp/hybris-commerce-suite.zip \
  && /opt/installer/install.sh -r b2c_acc

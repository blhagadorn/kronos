# Kronos Example


1. Create a Kubernetes cluster
2. Install the WASME CRD's  
`kubectl apply -f https://github.com/solo-io/wasme/releases/latest/download/wasme.io_v1_crds.yaml`
3. Install the WASME Operator  
`kubectl apply -f https://github.com/solo-io/wasme/releases/latest/download/wasme-default.yaml`
3. Install Istio (>`1.5.0` is needed for WASME to work)  
`istioctl manifest apply --set profile=demo`
4. Enable injection so that Envoy is attached to your pods  
`kubectl label namespace default istio-injection=enabled`  
5. Install Bookinfo and Bookinfo Gateways  
`kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.5/samples/bookinfo/platform/kube/bookinfo.yaml`  
`kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.5/samples/bookinfo/networking/bookinfo-gateway.yaml`  
6. Apply the FilterDeployment  
`kubectl apply -f example/filterdeployment.yaml`  
7. Inspect the response headers for the correct security headers  
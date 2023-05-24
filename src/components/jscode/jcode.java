import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    
    private int numVertices;
    private List<Integer>[] adjList;
    
    public Main(int numVertices) {
        this.numVertices = numVertices;
        adjList = new ArrayList[numVertices];
        
        for (int i = 0; i < numVertices; i++) {
            adjList[i] = new ArrayList<>();
        }
    }
    
    public void addEdge(int u, int v) {
        adjList[u].add(v);
        adjList[v].add(u);
    }
    
    public void colorGraph() {
        int[] color = new int[numVertices];
        boolean[] usedColors = new boolean[numVertices];
        
        // assign the first color to the first vertex
        color[0] = 0;
        usedColors[0] = true;
        
        // assign colors to remaining vertices
        for (int u = 1; u < numVertices; u++) {
            // reset used colors for each vertex
            for (int i = 0; i < numVertices; i++) {
                usedColors[i] = false;
            }
            
            // find adjacent vertices and mark their colors as used
            for (int v : adjList[u]) {
                if (color[v] != -1) {
                    usedColors[color[v]] = true;
                }
            }
            
            // assign the first unused color to the current vertex
            for (int i = 0; i < numVertices; i++) {
                if (!usedColors[i]) {
                    color[u] = i;
                    break;
                }
            }
        }
        
        // print the colors assigned to each vertex
        System.out.println("Colors assigned to vertices:");
        for (int i = 0; i < numVertices; i++) {
            System.out.printf("Vertex %d: Color %d\n", i, color[i]);
        }
    }
    
    public static void main(String[] args) {
        try {
            File inputFile = new File(args[0]);
            Scanner scanner = new Scanner(inputFile);
            
            int numVertices = scanner.nextInt();
            Main graph = new Main(numVertices);
            
            while (scanner.hasNextInt()) {
                int u = scanner.nextInt();
                int v = scanner.nextInt();
                
                graph.addEdge(u, v);
            }
            
            graph.colorGraph();
            
            scanner.close();
        } catch (FileNotFoundException e) {
            System.err.println("Input file not found.");
        }
    }
}
